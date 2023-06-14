import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { LaboratoireService } from 'src/app/service/laboratoire.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddLaboratoireModalComponent } from './add-laboratoire-modal/add-laboratoire-modal.component';
import { EditLaboratoireModalComponent } from './edit-laboratoire-modal/edit-laboratoire-modal.component';
import { AddDirectorModalComponent } from '../../director/add-director-modal/add-director-modal.component';
import { BudgetData } from 'src/app/model/BudgetData.model';
import { BudgetDataSummeryComponent } from './budget-data-summery/budget-data-summery.component';

@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.css']
})
export class LaboratoireComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'nom', 'email', 'adresse', 'telephone', 'responsable', 'domaine', 'description', 'etablissement', 'director', 'action'];
  public laboratoires: Laboratoire[] = [];
  dataSource: MatTableDataSource<Laboratoire> = new MatTableDataSource();

  public budgetData: BudgetData = new BudgetData();

  constructor(
    private laboratoireService: LaboratoireService,
    public dialog: MatDialog,
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getLaboratoires();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getLaboratoires(): void {
    this.laboratoireService.getAllLaboratoires().subscribe(
      (laboratoires: Laboratoire[]) => {
        console.log(laboratoires);
        this.laboratoires = laboratoires;
        this.dataSource = new MatTableDataSource(this.laboratoires);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }


  public onDeleteLaboratoire(laboratoireId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this laboratoire?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.laboratoireService.deleteLaboratoire(laboratoireId).subscribe(
            () => {
              this.getLaboratoires();
              showAlert('success', 'Success', 'Laboratoire deleted successfully!');
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


  public onOpenLaboratoireModal(laboratoire: any, operation: string) {
    let dialogRef: any;
    if (operation === 'add') {
      dialogRef = this.dialog.open(AddLaboratoireModalComponent);
    }
    if (operation === 'edit') {

      dialogRef = this.dialog.open(EditLaboratoireModalComponent, {
        data: laboratoire // passing etablissement data to the dialog component
      });
    }
    if (operation === 'set-director') {
      dialogRef = this.dialog.open(AddDirectorModalComponent, {
        data: laboratoire // passing etablissement data to the dialog component
      });
    }
    if (operation === 'budget-summery') {
      dialogRef = this.dialog.open(BudgetDataSummeryComponent, {
        data: laboratoire // passing etablissement data to the dialog component
      });
    }




    dialogRef.afterClosed().subscribe(() => {
      this.getLaboratoires();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
