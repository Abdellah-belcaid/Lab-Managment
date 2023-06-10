import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Responsable } from 'src/app/model/responsable.model';
import { ResponsableService } from 'src/app/service/responsable.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-edit-responsable-modal',
  templateUrl: './edit-responsable-modal.component.html',
  styleUrls: ['./edit-responsable-modal.component.css']
})
export class EditResponsableModalComponent {

  public editResponsable: any;
  public selectedResponsableType!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private responsableService: ResponsableService,
    public dialogRef: MatDialogRef<EditResponsableModalComponent>
  ) {
    console.log(data);
    this.editResponsable = data.responsable;
    this.selectedResponsableType=data.responsable.type;
  }

  public onEditResponsable(responsableForm: any): void {
    console.log(this.editResponsable);

    this.responsableService.updateResponsable(this.editResponsable.id, this.editResponsable).subscribe(
      (response: Responsable) => {
        responsableForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Responsable updated successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
        console.log(error);
      }
    );
  }

}
