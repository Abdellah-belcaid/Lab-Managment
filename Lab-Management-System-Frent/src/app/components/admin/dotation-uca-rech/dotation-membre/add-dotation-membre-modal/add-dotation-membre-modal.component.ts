import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DotationMembreId, Dotation_Membre } from 'src/app/model/dotationMembre.model';
import { Membre } from 'src/app/model/membre.model';
import { Dotation_MembreService } from 'src/app/service/dotation-membre.service';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-dotation-membre-modal',
  templateUrl: './add-dotation-membre-modal.component.html',
  styleUrls: ['./add-dotation-membre-modal.component.css']
})
export class AddDotationMembreModalComponent implements OnInit {
  public dotationMembre: Dotation_Membre = new Dotation_Membre();
  public dotationMembreId: DotationMembreId = new DotationMembreId();
  public membres: Membre[] = [];

  constructor(
    private dotationMembreService: Dotation_MembreService,
    public dialogRef: MatDialogRef<AddDotationMembreModalComponent>,
    private membreService: MembreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.dotationMembre)
    this.dotationMembreId.ucaRechId = data.dotationUcaRech.id;
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

  public onAddDotationMembre(dotationMembreForm: any): void {
    this.dotationMembre.id = this.dotationMembreId;
    console.log(this.dotationMembre);
    this.dotationMembreService.addDotation_Membre(this.dotationMembre).subscribe(
      (response: Dotation_Membre) => {
        dotationMembreForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Dotation Membre added successfully!');
      }
    );
  }
}
