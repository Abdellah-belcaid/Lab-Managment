import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { Membre } from 'src/app/model/membre.model';
import { LaboratoireService } from 'src/app/service/laboratoire.service';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddMembreModalComponent } from './add-membre-modal/add-membre-modal.component';
import { EditMembreModalComponent } from './edit-membre-modal/edit-membre-modal.component';
import { DotationProjetComponent } from './projet/dotation-projet/dotation-projet.component';
import { Role } from 'src/app/model/role.enum';
import { EditDirectorModalComponent } from '../director/edit-director-modal/edit-director-modal.component';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { User } from 'src/app/model/user.model';
import { Director } from 'src/app/model/director.model';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ `department`, `designation`, `email`, `name`, `phoneNumber`, `qualification`, `researchArea`,'laboratoire','role', `action`];
  public membres: Membre[] = [];
  dataSource: MatTableDataSource<Membre> = new MatTableDataSource();

  currentUser: User = new User();

  constructor(
    private membreService: MembreService,
    public dialog: MatDialog,
    private laboratoireService: LaboratoireService,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

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

    if (this.currentUser?.role === Role.DIRECTOR) {
      let dir: Director = Object.assign(new Director(), this.currentUser);
      this.getLaboratoireById(dir.laboratoire.id);
    }
    else {
      this.membreService.getAllMembres().subscribe(
        (membres: Membre[]) => {
          this.membres = membres;
          console.log(membres);
          this.dataSource = new MatTableDataSource(this.membres);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        (error: HttpErrorResponse) => {
          showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
        }
      );
    }
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

  private getLaboratoireById(id: number): any {
    this.laboratoireService.getLaboratoireById(id).subscribe(
      (laboratoire: Laboratoire) => {
        this.membres = laboratoire.membres;
        this.dataSource = new MatTableDataSource(this.membres);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        return laboratoire;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
        return;
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
        if (membre.role === Role.DIRECTOR) {
          dialogRef = this.dialog.open(EditDirectorModalComponent, {
            data: {
              membre: membre,
            }
          });
        } else {
          dialogRef = this.dialog.open(EditMembreModalComponent, {
            data: {
              membre: membre,
              laboratoires: laboratoires
            }
          });
        }
      }
      if (operation === 'dotation-list') {
        dialogRef = this.dialog.open(DotationProjetComponent, {
          data: {
            id: membre.id,
            type: 'membre'
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
