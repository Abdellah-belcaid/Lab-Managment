import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Responsable } from 'src/app/model/responsable.model';
import { RespoMarche } from 'src/app/model/respoMarche.model';
import { ResponsableService } from 'src/app/service/responsable.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';
import { RespoAffairesFinancier } from 'src/app/model/respoAffairesFinancier .model';

@Component({
  selector: 'app-add-responsable-modal',
  templateUrl: './add-responsable-modal.component.html',
  styleUrls: ['./add-responsable-modal.component.css']
})
export class AddResponsableModalComponent implements OnInit {
  public newResponsable: Responsable = new Responsable();
  public selectedResponsableType!: string;
  public respoMarche: RespoMarche = new RespoMarche();
  public respoAffairesFinancier: RespoAffairesFinancier = new RespoAffairesFinancier();

  constructor(
    private responsableService: ResponsableService,
    public dialogRef: MatDialogRef<AddResponsableModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  public onAddResponsable(responsableForm: any): void {
    console.log(responsableForm.value);
    // Add the rest of the form data to the selected Responsable type
    if (this.selectedResponsableType === 'RespoMarche') {
      this.respoMarche = { ...this.respoMarche, ...responsableForm.value };
    } else if (this.selectedResponsableType === 'RespoAffairesFinancier') {
      this.respoAffairesFinancier = { ...this.respoAffairesFinancier, ...responsableForm.value };
    }

    // Set the selected Responsable type in the newResponsable object
    this.newResponsable = this.selectedResponsableType === 'RespoMarche' ? this.respoMarche : this.respoAffairesFinancier;

    // Save the newResponsable object
    console.log(this.newResponsable);
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
