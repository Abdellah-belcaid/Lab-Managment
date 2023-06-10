import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { Membre } from 'src/app/model/membre.model';
import { Role } from 'src/app/model/role.enum';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';


@Component({
  selector: 'edit-membre-modal',
  templateUrl: 'edit-membre-modal.component.html',
  styleUrls: ['edit-membre-modal.component.css']
})
export class EditMembreModalComponent {
  editedMembre: Membre;
  laboratoires: Laboratoire[];
  roles: string[] = Object.values(Role);

  constructor(
    private dialogRef: MatDialogRef<EditMembreModalComponent>,
    private membreService: MembreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editedMembre = data.membre;
    this.laboratoires = data.laboratoires;
  }

  public onEditMembre(membreForm: any): void {
    console.log(membreForm.value);
    this.membreService.updateMembre(this.editedMembre.id, this.editedMembre).subscribe(
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


