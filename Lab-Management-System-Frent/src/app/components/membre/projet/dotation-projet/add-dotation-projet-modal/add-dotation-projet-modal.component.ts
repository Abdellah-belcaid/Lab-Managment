import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DotationProjectId, Dotation_Project } from 'src/app/model/dotationProject.model';
import { Membre } from 'src/app/model/membre.model';
import { DotationProjetService } from 'src/app/service/dotation-projet.service';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-dotation-projet-modal',
  templateUrl: './add-dotation-projet-modal.component.html',
  styleUrls: ['./add-dotation-projet-modal.component.css']
})
export class AddDotationProjectModalComponent implements OnInit {
  public newDotationProject: Dotation_Project = new Dotation_Project();
  public dotationProjectId: DotationProjectId = new DotationProjectId();
  public membres: Membre[] = [];


  constructor(
    private dotationProjectService: DotationProjetService,
    public dialogRef: MatDialogRef<AddDotationProjectModalComponent>,
    private membreService: MembreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dotationProjectId.projetId = data.projet.id;
  }
  ngOnInit(): void {
    this.getMembres();
  }

  private getMembres(): void {
    this.membreService.getAllMembres().subscribe(
      (membres: Membre[]) => {
        this.membres = membres;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onAddDotationProject(dotationProjectForm: any): void {

    this.newDotationProject.id = this.dotationProjectId;

    this.dotationProjectService.createDotation_Project(this.newDotationProject).subscribe(
      (response: Dotation_Project) => {
        dotationProjectForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Dotation Project added successfully!');
      }
    );
  }
}
