import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Etablissement } from 'src/app/model/etablissement.model';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { EtablissementService } from 'src/app/service/etablissement.service';
import { LaboratoireService } from 'src/app/service/laboratoire.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-edit-laboratoire-modal',
  templateUrl: './edit-laboratoire-modal.component.html',
  styleUrls: ['./edit-laboratoire-modal.component.css']
})
export class EditLaboratoireModalComponent {
  public editLaboratoire: Laboratoire;
  public etablissements: Etablissement[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private laboratoireService: LaboratoireService,
    private etablissementService: EtablissementService,
    public dialogRef: MatDialogRef<EditLaboratoireModalComponent>,
  ) {
    console.log(data);
    this.editLaboratoire = data;
    this.loadEtablissements();
  }

  private loadEtablissements(): void {
    this.etablissementService.getAllEtablissements().subscribe(
      (etablissements: Etablissement[]) => {
        this.etablissements = etablissements;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onEditLaboratoire(laboratoireForm: any): void {
    console.log(laboratoireForm.value);
    this.laboratoireService.updateLaboratoire(this.editLaboratoire.id, laboratoireForm.value).subscribe(
      (response: Laboratoire) => {
        laboratoireForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Laboratoire updated successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }
}
