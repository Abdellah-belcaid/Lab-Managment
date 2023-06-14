import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Etablissement } from 'src/app/model/etablissement.model';
import { EtablissementService } from 'src/app/service/etablissement.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';
import { AddEtablissementModalComponent } from '../add-etablissement-modal/add-etablissement-modal.component';

@Component({
  selector: 'app-edit-etablissement-modal',
  templateUrl: './edit-etablissement-modal.component.html',
  styleUrls: ['./edit-etablissement-modal.component.css']
})
export class EditEtablissementModalComponent {


  public editEtablissement: Etablissement;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private etablissementService: EtablissementService,
    public dialogRef: MatDialogRef<AddEtablissementModalComponent>,

  ) {
    console.log(data);
    this.editEtablissement = data;
  }

  public onEditEtablissement(etablissementForm: any): void {
    this.etablissementService.updateEtablissement(this.editEtablissement.id, this.editEtablissement).subscribe(
      (response: Etablissement) => {
        etablissementForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Etablissement updated successfully!');
      }
    );
  }

}
