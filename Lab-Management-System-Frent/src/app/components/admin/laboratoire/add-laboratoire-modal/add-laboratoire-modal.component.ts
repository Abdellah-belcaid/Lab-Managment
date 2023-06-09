import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Etablissement } from 'src/app/model/etablissement.model';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { EtablissementService } from 'src/app/service/etablissement.service';
import { LaboratoireService } from 'src/app/service/laboratoire.service';
import { showAlert, getStatusName } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-laboratoire-modal',
  templateUrl: './add-laboratoire-modal.component.html',
  styleUrls: ['./add-laboratoire-modal.component.css']
})
export class AddLaboratoireModalComponent implements OnInit {
  public newLaboratoire: Laboratoire = new Laboratoire();
  public etablissements: Etablissement[] = []; // Populate this array with the list of establishments

  constructor(
    private laboratoireService: LaboratoireService,
    public dialogRef: MatDialogRef<AddLaboratoireModalComponent>,
    private snackBar: MatSnackBar,
    private etablissementService: EtablissementService
  ) { }
  ngOnInit(): void {
    this.getEtablissements();
  }

  private getEtablissements(): void {
    this.etablissementService.getAllEtablissements().subscribe(
      (etablissements: Etablissement[]) => {
        this.etablissements = etablissements;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onAddLaboratoire(laboratoireForm: any): void {
    console.log(laboratoireForm.value);
    this.laboratoireService.addLaboratoire(laboratoireForm.value).subscribe(
      (response: Laboratoire) => {
        laboratoireForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'laboratoire added successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }
}
