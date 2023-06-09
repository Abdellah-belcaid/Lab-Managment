import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpressionBesoin } from 'src/app/model/expressionBesoin.model';
import { ExpressionBesoinService } from 'src/app/service/expression-besoin.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddExpressionBesoinModalComponent } from './add-expression-besoin-modal/add-expression-besoin-modal.component';
import { EditExpressionBesoinModalComponent } from './edit-expression-besoin-modal/edit-expression-besoin-modal.component';

@Component({
  selector: 'app-expression-besoin',
  templateUrl: './expression-besoin.component.html',
  styleUrls: ['./expression-besoin.component.css']
})
export class ExpressionBesoinComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'description', 'montant', 'demandeDate', 'validatDate', 'isValid', 'membre', 'responsable', 'action'];
  public expressionBesoins: ExpressionBesoin[] = [];
  dataSource: MatTableDataSource<ExpressionBesoin> = new MatTableDataSource();

  constructor(
    private expressionBesoinService: ExpressionBesoinService,
    public dialog: MatDialog,
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getExpressionBesoins();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getExpressionBesoins(): void {
    this.expressionBesoinService.getAllExpressionBesoins().subscribe(
      (expressionBesoins: ExpressionBesoin[]) => {
        console.log(expressionBesoins);
        this.expressionBesoins = expressionBesoins;
        this.dataSource = new MatTableDataSource(this.expressionBesoins);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        // AlertMessages(this.snackBar, error);
      }
    );
  }

  public onDeleteExpressionBesoin(expressionBesoinId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this expression besoin?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.expressionBesoinService.deleteExpressionBesoin(expressionBesoinId).subscribe(
            () => {
              this.getExpressionBesoins();
              showAlert('success', 'Success', 'Expression besoin deleted successfully!');
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

  public onOpenExpressionBesoinModal(expressionBesoin: any, operation: string) {
    let dialogRef: any;
    if (operation === 'add') {
      dialogRef = this.dialog.open(AddExpressionBesoinModalComponent);
    }
    if (operation === 'edit') {
      dialogRef = this.dialog.open(EditExpressionBesoinModalComponent, {
        data: expressionBesoin // passing expressionBesoin data to the dialog component
      });
    }
    dialogRef.afterClosed().subscribe(() => {
      this.getExpressionBesoins();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
