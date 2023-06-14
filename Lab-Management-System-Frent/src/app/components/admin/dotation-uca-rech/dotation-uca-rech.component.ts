


import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dotation_Membre } from 'src/app/model/dotationMembre.model';
import { DotationUcaRech } from 'src/app/model/dotationUcaRech.model';
import { showAlert, getStatusName, showConfirmationAlert } from 'src/app/utils/alertMessages';
import { AddDotationUcaRechModalComponent } from './add-dotation-uca-rech-modal/add-dotation-uca-rech-modal.component';
import { EditDotationUcaRechModalComponent } from './edit-dotation-uca-rech-modal/edit-dotation-uca-rech-modal.component';
import { DotationUcaRechService } from 'src/app/service/dotation-uca-rech.service';
import { AddDotationMembreModalComponent } from './dotation-membre/add-dotation-membre-modal/add-dotation-membre-modal.component';
import { DotationMembreComponent } from './dotation-membre/dotation-membre.component';

@Component({
  selector: 'app-dotation-uca-rech',
  templateUrl: './dotation-uca-rech.component.html',
  styleUrls: ['./dotation-uca-rech.component.css']
})
export class DotationUcaRechComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'title','description','anneAffectation', 'membreNames', 'action'];
  public dotationUcaRechs: DotationUcaRech[] = [];
  dataSource: MatTableDataSource<DotationUcaRech> = new MatTableDataSource();

  constructor(
    private dotationUcaRechService: DotationUcaRechService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getDotationUcaRechs();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getDotationUcaRechs(): void {
    this.dotationUcaRechService.getAllDotationUcaRech().subscribe(
      (dotationUcaRechs: DotationUcaRech[]) => {
        console.log(dotationUcaRechs);
        this.dotationUcaRechs = dotationUcaRechs;
        this.dataSource = new MatTableDataSource(this.dotationUcaRechs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onDeleteDotationUcaRech(dotationUcaRechId: number): void {
    showConfirmationAlert('Confirmation', 'Are you sure you want to delete this dotationUcaRech?', 'Delete', 'Cancel').then(
      (confirmed) => {
        if (confirmed) {
          this.dotationUcaRechService.deleteDotationUcaRech(dotationUcaRechId).subscribe(
            () => {
              this.getDotationUcaRechs();
              showAlert('success', 'Success', 'DotationUcaRech deleted successfully!');
            },
            (error: HttpErrorResponse) => {
              showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
              console.log(error);
            }
          );
        }
      }
    );
  }

  public onOpenDotationUcaRechModal(dotationUcaRech: any, operation: string) {
    let dialogRef: any;
    if (operation === 'add') {
      dialogRef = this.dialog.open(AddDotationUcaRechModalComponent);
    }
    if (operation === 'edit') {
      dialogRef = this.dialog.open(EditDotationUcaRechModalComponent, {
        data: {
          dotationUcaRech: dotationUcaRech
        }
      });
    }
    if (operation === 'add-dotation-Membre') {
      dialogRef = this.dialog.open(AddDotationMembreModalComponent, {
        data: {
          dotationUcaRech: dotationUcaRech
        }
      });
    }
    if (operation === 'dotation-Membre-list') {
      dialogRef = this.dialog.open(DotationMembreComponent, {
        data: {
          id: dotationUcaRech.id,
          type:'ucaRech'
        }
      });
    }
    dialogRef.afterClosed().subscribe(() => {
      this.getDotationUcaRechs();
    });
  }

  // public getMembreNames(dotationMembres: Dotation_Membre[]): string {
  //   return dotationMembres.map((membre) => membre.name).join(', ');
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
