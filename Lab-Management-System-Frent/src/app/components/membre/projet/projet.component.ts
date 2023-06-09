import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Projet } from 'src/app/model/projet.model';
import { ProjetService } from 'src/app/service/projet.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddProjetModalComponent } from './add-projet-modal/add-projet-modal.component';
import { EditProjetModalComponent } from './edit-projet-modal/edit-projet-modal.component';
import { AddDotationProjectModalComponent } from './dotation-projet/add-dotation-projet-modal/add-dotation-projet-modal.component';
import { DotationProjetComponent } from './dotation-projet/dotation-projet.component';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'field', 'startDate', 'endDate', 'action'];
  public projets: Projet[] = [];
  dataSource: MatTableDataSource<Projet> = new MatTableDataSource();

  constructor(
    private projetService: ProjetService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getProjets();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getProjets(): void {
    this.projetService.getAllProjets().subscribe(
      (projets: Projet[]) => {
        console.log(projets);
        this.projets = projets;
        this.dataSource = new MatTableDataSource(this.projets);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onDeleteProjet(projetId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this projet?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.projetService.deleteProjet(projetId).subscribe(
            () => {
              this.getProjets();
              showAlert('success', 'Success', 'Projet deleted successfully!');
            },
            (error: HttpErrorResponse) => {
              showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
              console.log(error);
            }
          );
        }
      }
    );
  }

  public onOpenProjetModal(projet: any, operation: string) {
    let dialogRef: any;
    if (operation === 'add') {
      dialogRef = this.dialog.open(AddProjetModalComponent);
    }
    if (operation === 'edit') {
      dialogRef = this.dialog.open(EditProjetModalComponent, {
        data: {
          projet: projet
        }
      });
    }
    if (operation === 'add-dotation') {
      dialogRef = this.dialog.open(AddDotationProjectModalComponent, {
        data: {
          projet: projet
        }
      });
    }
    if (operation === 'dotation-list') {
      dialogRef = this.dialog.open(DotationProjetComponent, {
        data: {
          id: projet.id,
          type: 'projet'
        }
      });
    }
    dialogRef.afterClosed().subscribe(() => {
      this.getProjets();
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
