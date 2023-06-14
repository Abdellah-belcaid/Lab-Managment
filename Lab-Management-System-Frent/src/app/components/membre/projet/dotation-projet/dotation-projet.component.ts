import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dotation_Project } from 'src/app/model/dotationProject.model';
import { Projet } from 'src/app/model/projet.model';
import { DotationProjetService } from 'src/app/service/dotation-projet.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';


@Component({
  selector: 'app-dotation-projet',
  templateUrl: './dotation-projet.component.html',
  styleUrls: ['./dotation-projet.component.css']
})
export class DotationProjetComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'status', 'source', 'purpose', 'endowmentAmount', 'projet', 'membre', 'action'];
  public dotationProject: Dotation_Project[] = [];
  dataSource: MatTableDataSource<Dotation_Project> = new MatTableDataSource();

  constructor(
    private dotationProjectService: DotationProjetService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadDotationProjectsById(this.data.id,this.data.type);
    
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  loadDotationProjectsById(id: number, type: string): void {
    if (type === 'projet') {
      this.dotationProjectService.getAllDotationProjectsByProjetId(id)
        .subscribe(
          (data: Dotation_Project[]) => {
            this.dotationProject = data;
            this.dataSource = new MatTableDataSource(this.dotationProject);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          },
          error => {
            const errorMessage = `${error.message}`;
            showAlert('error', `Error : ${getStatusName(error.status)}`, errorMessage);
          }
        );
    } else if (type === 'membre') {
      this.dotationProjectService.getAllDotationProjectsByMembreId(id)
        .subscribe(
          (data: Dotation_Project[]) => {
            this.dotationProject = data;
            this.dataSource = new MatTableDataSource(this.dotationProject);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          },
          error => {
            const errorMessage = `${error.message}`;
            showAlert('error', `Error : ${getStatusName(error.status)}`, errorMessage);
          }
        );
    }
  }

  public onDeleteDotationProject(membreId: number, ProjectId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this dotation project?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.dotationProjectService.deleteDotation_Project(ProjectId, membreId).subscribe(
            () => {
              showAlert('success', 'Success', 'Dotation project deleted successfully!');
              this.loadDotationProjectsById(this.data.id,this.data.type);
            },
            (error: HttpErrorResponse) => {
              const errorMessage = `${error.message}`;
              showAlert('error', `Error : ${getStatusName(error.status)}`, errorMessage);
              console.log(error);
            }
          );
        }
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
