import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Membre } from 'src/app/model/membre.model';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddMembreModalComponent } from './add-membre-modal/add-membre-modal.component';
import { EditMembreModalComponent } from './edit-membre-modal/edit-membre-modal.component';
import { LaboratoireService } from 'src/app/service/laboratoire.service';
import { Laboratoire } from 'src/app/model/laboratoire.model';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [`id`, `department`, `designation`, `email`, `name`, `phoneNumber`, `qualification`, `researchArea`, `laboratoire`, `action`];
  public membres: Membre[] = [];
  dataSource: MatTableDataSource<Membre> = new MatTableDataSource();

  constructor(
    private membreService: MembreService,
    public dialog: MatDialog,
    private laboratoireService: LaboratoireService,
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getMembres();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getMembres(): void {
    this.membreService.getAllMembres().subscribe(
      (membres: Membre[]) => {
        this.membres = membres;
        this.dataSource = new MatTableDataSource(this.membres);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onDeleteMembre(membreId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this membre?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.membreService.deleteMembre(membreId).subscribe(
            () => {
              this.getMembres();
              showAlert('success', 'Success', 'Membre deleted successfully!');
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

  private getLaboratoires(): any {
    this.laboratoireService.getAllLaboratoires().subscribe(
      (laboratoires: Laboratoire[]) => {
        return laboratoires;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
        return [];
      }
    );
  }


  public onOpenMembreModal(membre: any, operation: string) {
    let dialogRef: any;
    this.laboratoireService.getAllLaboratoires().subscribe((laboratoires: Laboratoire[]) => {
      if (operation === 'add') {
        dialogRef = this.dialog.open(AddMembreModalComponent, {
          data: {
            laboratoires: laboratoires
          }
        });
      }
      if (operation === 'edit') {
        dialogRef = this.dialog.open(EditMembreModalComponent, {
          data: {
            membre: membre,
            laboratoires: laboratoires
          }
        });
      }
      dialogRef.afterClosed().subscribe(() => {
        this.getMembres();
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
