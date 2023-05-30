import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Projet } from 'src/app/model/projet.model';
import { ProjetService } from 'src/app/service/projet.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-projet-modal.component.html',
  styleUrls: ['./add-projet-modal.component.css']
})
export class AddProjetModalComponent implements OnInit {
  public newProjet: Projet = new Projet();

  constructor(
    private projetService: ProjetService,
    public dialogRef: MatDialogRef<AddProjetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void { }

  public onAddProjet(projectForm: any): void {
    console.log(projectForm.value);
    this.projetService.addProjet(projectForm.value).subscribe(
      (response: Projet) => {
        projectForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Project added successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
        console.log(error);
      }
    );
  }
}
