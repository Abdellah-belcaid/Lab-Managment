import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { Membre } from 'src/app/model/membre.model';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';


@Component({
  selector: 'edit-membre-modal',
  templateUrl: 'edit-membre-modal.component.html',
  styleUrls: ['edit-membre-modal.component.css']
})
export class EditMembreModalComponent {
  editMembre: Membre;
  laboratoires: Laboratoire[];

  constructor(
    private dialogRef: MatDialogRef<EditMembreModalComponent>,
    private membreService: MembreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editMembre = data.membre;
    this.laboratoires = data.laboratoires;
  }

  public onEditMembre(membreForm: any): void {
    console.log(membreForm.value);
    this.membreService.updateMembre(this.editMembre.id, this.editMembre).subscribe(
      () => {
        membreForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Membre updated successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }
}


