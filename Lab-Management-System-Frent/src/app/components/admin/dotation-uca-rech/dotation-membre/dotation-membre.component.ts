import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dotation_Membre } from 'src/app/model/dotationMembre.model';
import { Dotation_MembreService } from 'src/app/service/dotation-membre.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';


@Component({
  selector: 'app-dotation-membre',
  templateUrl: './dotation-membre.component.html',
  styleUrls: ['./dotation-membre.component.css']
})
export class DotationMembreComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['ucaRechId', 'membreId', 'montant', 'anneAffecter', 'ucaRech', 'membre', 'action'];
  public dotationMembres: Dotation_Membre[] = [];
  dataSource: MatTableDataSource<Dotation_Membre> = new MatTableDataSource();

  constructor(
    private dotationMembreService: Dotation_MembreService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadDotationMembresById(this.data.id, this.data.type);
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadDotationMembresById(id: number, type: string): void {
    if (type === 'ucaRech') {
      this.dotationMembreService.getAllDotationMembresByUcaRechId(id)
        .subscribe(
          (data: Dotation_Membre[]) => {
            this.dotationMembres = data;
            this.dataSource = new MatTableDataSource(this.dotationMembres);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          },
          error => {
            const errorMessage = `${error.message}`;
            showAlert('error', `Error : ${getStatusName(error.status)}`, errorMessage);
          }
        );
    } else if (type === 'membre') {
      this.dotationMembreService.getAllDotationMembresByMembreId(id)
        .subscribe(
          (data: Dotation_Membre[]) => {
            this.dotationMembres = data;
            this.dataSource = new MatTableDataSource(this.dotationMembres);
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

  onDeleteDotationMembre(membreId: number, projectId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this dotation project?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.dotationMembreService.deleteDotation_Membre(projectId, membreId).subscribe(
            () => {
              showAlert('success', 'Success', 'Dotation project deleted successfully!');
              this.loadDotationMembresById(this.data.id, this.data.type);
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

  // private mapToDotationMembres(data: Dotation_Project[]): Dotation_Membre[] {
  //   return data.map((item: Dotation_Project) => ({
  //     id: { ucaRechId: item.id.ucaRechId, membreId: item.id.membreId },
  //     montant: item.montant,
  //     AnneAffecter: item.AnneAffecter,
  //     ucaRech: item.ucaRech,
  //     membre: item.membre
  //   }));
  // }
}
