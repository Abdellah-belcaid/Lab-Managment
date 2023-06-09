import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Etablissement } from 'src/app/model/etablissement.model';
import { EtablissementService } from 'src/app/service/etablissement.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddEtablissementModalComponent } from './add-etablissement-modal/add-etablissement-modal.component';
import { EditEtablissementModalComponent } from './edit-etablissement-modal/edit-etablissement-modal.component';
// import { AlertMessages } from 'src/app/shared/app.utils';
// import { AddEtablissementModalComponent } from './add-etablissement-modal/add-etablissement-modal.component';
// import { EditEtablissementModalComponent } from './edit-etablissement-modal/edit-etablissement-modal.component';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'nom', 'email', 'siteWeb', 'gsm', 'adresse', 'action'];
  public etablissements: Etablissement[] = [];
  dataSource: MatTableDataSource<Etablissement> = new MatTableDataSource();

  constructor(
    private etablissementService: EtablissementService,
    public dialog: MatDialog,
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getEtablissements();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getEtablissements(): void {
    this.etablissementService.getAllEtablissements().subscribe(
      (etablissements: Etablissement[]) => {
        console.log(etablissements);
        this.etablissements = etablissements;
        this.dataSource = new MatTableDataSource(this.etablissements);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        // AlertMessages(this.snackBar, error);
      }
    );
  }

  public onDeleteEtablissement(etablissementId: number): void {

    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this etablissement?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.etablissementService.deleteEtablissement(etablissementId).subscribe(
            () => {
              this.getEtablissements();
              showAlert('success', 'Success', 'Etablissement deleted successfully!');
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

  public onOpenEtablissementModal(etablissement: any, operation: string) {
    let dialogRef: any;
    if (operation === 'add') {
      dialogRef = this.dialog.open(AddEtablissementModalComponent);
    }
    if (operation === 'edit') {
      dialogRef = this.dialog.open(EditEtablissementModalComponent, {
        data: etablissement // passing etablissement data to the dialog component
      });
    }
    dialogRef.afterClosed().subscribe(() => {
      this.getEtablissements();
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
