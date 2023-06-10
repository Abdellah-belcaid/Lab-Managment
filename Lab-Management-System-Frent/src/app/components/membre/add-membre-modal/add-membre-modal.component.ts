import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { Membre } from 'src/app/model/membre.model';
import { Role } from 'src/app/model/role.enum';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-membre-modal',
  templateUrl: './add-membre-modal.component.html',
  styleUrls: ['./add-membre-modal.component.css']
})
export class AddMembreModalComponent implements OnInit{
  public newMembre: Membre = new Membre();
  public laboratoires !: Laboratoire[];
  roles: string[] = Object.values(Role);

  constructor(
    private membreService: MembreService,
    public dialogRef: MatDialogRef<AddMembreModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    this.laboratoires=this.data.laboratoires;
    console.log(this.laboratoires);
  }

  public onAddMembre(membreForm: any): void {
    console.log(membreForm.value);
    this.membreService.addMembre(membreForm.value).subscribe(
      (response: Membre) => {
        membreForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Membre added successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
        console.log(error);
      }
    );
  }
}
