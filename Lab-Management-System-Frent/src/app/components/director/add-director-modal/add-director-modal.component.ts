import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { Director } from 'src/app/model/director.model';
import { Role } from 'src/app/model/role.enum';
import { DirectorService } from 'src/app/service/director.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';


@Component({
  selector: 'app-add-director-modal',
  templateUrl: './add-director-modal.component.html',
  styleUrls: ['./add-director-modal.component.css']
})
export class AddDirectorModalComponent implements OnInit {
  public newDirector: Director = new Director();



  constructor(
    private directorService: DirectorService,
    public dialogRef: MatDialogRef<AddDirectorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    this.newDirector.role=Role.DIRECTOR;
    this.newDirector.laboratoire=this.data;
    console.log(this.newDirector);
  }

  public onAddDirector(directorForm: any): void {
    console.log(directorForm.value);
    this.directorService.createDirector(this.newDirector).subscribe(
      (response: Director) => {
        directorForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Director added successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
        console.log(error);
      }
    );
  }
}

