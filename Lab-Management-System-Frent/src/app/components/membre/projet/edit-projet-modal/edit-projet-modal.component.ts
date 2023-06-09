import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Projet } from 'src/app/model/projet.model';
import { ProjetService } from 'src/app/service/projet.service';
import { showAlert, getStatusName } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-edit-projet-modal',
  templateUrl: './edit-projet-modal.component.html',
  styleUrls: ['./edit-projet-modal.component.css']
})
export class EditProjetModalComponent {


  editProjet: Projet =new Projet();
  constructor(
    private dialogRef: MatDialogRef<EditProjetModalComponent>, // Update the component name in the constructor
    private projetService: ProjetService, // Update the service name
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editProjet = data.projet; // Update the property name
  }

  public onEditProjet(projectForm: any): void { // Update the method name
    console.log(projectForm.value); // Update the variable name
    this.projetService.updateProjet(this.editProjet.id, this.editProjet).subscribe(
      () => {
        projectForm.reset(); // Update the variable name
        this.dialogRef.close();
        showAlert('success', 'Success', 'Project updated successfully!'); // Update the message
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }
}

