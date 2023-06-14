import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Responsable } from 'src/app/model/responsable.model';
import { ResponsableService } from 'src/app/service/responsable.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddResponsableModalComponent } from './add-responsable-modal/add-responsable-modal.component';
import { EditResponsableModalComponent } from './edit-responsable-modal/edit-responsable-modal.component';
import { RespoAffairesFinancierService } from 'src/app/service/respo-affaires-financier.service';
import { RespoAffairesFinancier } from 'src/app/model/respoAffairesFinancier .model';
import { RespoMarche } from 'src/app/model/respoMarche.model';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit, AfterViewInit {

  respoAffairesFinancierList!: RespoAffairesFinancier[];
  respoMarcheList!: RespoMarche[];

  displayedColumns: string[] = ['id', 'name', 'username', 'tel', 'email', 'created time', 'role', 'action'];
  public responsables: Responsable[] = [];
  dataSource: MatTableDataSource<Responsable> = new MatTableDataSource();

  constructor(
    private responsableService: ResponsableService,
    public dialog: MatDialog,
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getResponsables();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getResponsables(): void {
    this.responsableService.getAllResponsables().subscribe(
      (responsables: any[]) => {
        this.respoAffairesFinancierList = responsables.filter(r => r.type === 'Affaires_Financier') as RespoAffairesFinancier[];
        this.respoMarcheList = responsables.filter(r => r.type === "Marche") as RespoMarche[];
        this.responsables = responsables;
        this.dataSource = new MatTableDataSource(this.responsables);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onDeleteResponsable(responsableId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this responsable?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.responsableService.deleteResponsable(responsableId).subscribe(
            () => {
              this.getResponsables();
              showAlert('success', 'Success', 'Responsable deleted successfully!');
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

  public onOpenResponsableModal(responsable: any | null, operation: string) {

    let dialogRef: any;
    if (operation === 'add') {
      dialogRef = this.dialog.open(AddResponsableModalComponent);
    }
    if (operation === 'edit') {
      dialogRef = this.dialog.open(EditResponsableModalComponent, {
        data: {
          responsable: responsable,
        }
      });
    }
    dialogRef.afterClosed().subscribe(() => {
      this.getResponsables();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
