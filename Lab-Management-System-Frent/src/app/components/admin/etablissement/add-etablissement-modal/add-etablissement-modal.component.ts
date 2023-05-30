import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Etablissement } from 'src/app/model/etablissement.model';
import { EtablissementService } from 'src/app/service/etablissement.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';
// import { AlertMessages } from 'src/app/shared/app.utils';

@Component({
  selector: 'app-add-etablissement-modal',
  templateUrl: './add-etablissement-modal.component.html',
  styleUrls: ['./add-etablissement-modal.component.css']
})
export class AddEtablissementModalComponent {
  public newEtablissement: Etablissement = new Etablissement();

  constructor(
    private etablissementService: EtablissementService,
    public dialogRef: MatDialogRef<AddEtablissementModalComponent>,
    private snackBar: MatSnackBar
  ) { }

  public onAddEtablissement(etablissementForm: any): void {
    console.log(etablissementForm.value);
    this.etablissementService.addEtablissement(etablissementForm.value).subscribe(
      (response: Etablissement) => {
        etablissementForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Etablissement added successfully!');
      }
    );
  }
}
