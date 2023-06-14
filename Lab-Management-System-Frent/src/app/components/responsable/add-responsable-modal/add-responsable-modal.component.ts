import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { RespoAffairesFinancier } from 'src/app/model/respoAffairesFinancier .model';
import { RespoMarche } from 'src/app/model/respoMarche.model';
import { Responsable } from 'src/app/model/responsable.model';
import { Role } from 'src/app/model/role.enum';
import { ResponsableService } from 'src/app/service/responsable.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-responsable-modal',
  templateUrl: './add-responsable-modal.component.html',
  styleUrls: ['./add-responsable-modal.component.css']
})
export class AddResponsableModalComponent implements OnInit {
  public newResponsable: Responsable = new Responsable();
  public respoMarche: RespoMarche = new RespoMarche();
  public respoAffairesFinancier: RespoAffairesFinancier = new RespoAffairesFinancier();
  public selectedResponsableType!: string;

  constructor(
    private responsableService: ResponsableService,
    public dialogRef: MatDialogRef<AddResponsableModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  public onAddResponsable(responsableForm: any): void {

    // Assign the form data to the selected Responsable type
    this.newResponsable = this.selectedResponsableType === 'RespoMarche'
      ? Object.assign(this.respoMarche, this.newResponsable)
      : Object.assign(this.respoAffairesFinancier, this.newResponsable);
    // Save the newResponsable object
    this.responsableService.addResponsable(this.newResponsable).subscribe(
      (response: Responsable) => {
        responsableForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Responsable added successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
        console.log(error);
      }
    );
  }

  public onResponsableTypeChange(event: MatSelectChange): void {
    this.selectedResponsableType = event.value;
  }
}
