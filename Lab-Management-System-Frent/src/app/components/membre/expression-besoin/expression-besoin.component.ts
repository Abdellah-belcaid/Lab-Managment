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
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MembreService } from 'src/app/service/membre.service';
import { Membre } from 'src/app/model/membre.model';
import { Role } from 'src/app/model/role.enum';

@Component({
  selector: 'app-expression-besoin',
  templateUrl: './expression-besoin.component.html',
  styleUrls: ['./expression-besoin.component.css']
})
export class ExpressionBesoinComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['description', 'montant approximatif', 'montant effectif', 'demandeDate', 'validatDate', 'isValid', 'membre', 'responsable', 'expressionBesoinType', 'action'];
  public expressionBesoins: ExpressionBesoin[] = [];
  dataSource: MatTableDataSource<ExpressionBesoin> = new MatTableDataSource();


  currentUser: User = new User();

  constructor(
    private expressionBesoinService: ExpressionBesoinService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private membreService: MembreService,
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });

  }

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
    if (this.currentUser.role === Role.MEMBER) {
      let membre: Membre = Object.assign(new Membre(), this.currentUser);
      this.getExpressionBesoinsByMembreId(membre.id);
    }
    else {
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
  }

  private getExpressionBesoinsByMembreId(id: number): any {
    this.membreService.getMembreById(id).subscribe(
      (membre: Membre) => {
        console.log(membre);
        this.expressionBesoins = membre.expressionBesoins;
        console.log(this.expressionBesoins);
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
