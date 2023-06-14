import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Director } from 'src/app/model/director.model';
import { DirectorService } from 'src/app/service/director.service';
import { showAlert, getStatusName } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-edit-director-modal',
  templateUrl: './edit-director-modal.component.html',
  styleUrls: ['./edit-director-modal.component.css']
})
export class EditDirectorModalComponent implements OnInit {
  public editedDirector!: Director;

  constructor(
    private directorService: DirectorService,
    public dialogRef: MatDialogRef<EditDirectorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editedDirector=this.data.membre;
    console.log(data);
  }

  ngOnInit(): void {

  }

  public onEditDirector(directorForm: any): void {
    console.log(directorForm.value);
    this.directorService.updateDirector(this.editedDirector.id, this.editedDirector).subscribe(
      (response: Director) => {
        directorForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Director updated successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
        console.log(error);
      }
    );
  }
}
