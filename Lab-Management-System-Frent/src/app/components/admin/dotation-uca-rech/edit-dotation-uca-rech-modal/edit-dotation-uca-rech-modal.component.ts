import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DotationUcaRech } from 'src/app/model/dotationUcaRech.model';
import { DotationUcaRechService } from 'src/app/service/dotation-uca-rech.service';
import { showAlert } from 'src/app/utils/alertMessages';



@Component({
  selector: 'app-edit-dotation-uca-rech-modal',
  templateUrl: './edit-dotation-uca-rech-modal.component.html',
  styleUrls: ['./edit-dotation-uca-rech-modal.component.css']
})
export class EditDotationUcaRechModalComponent implements OnInit {

  public editedDotationUcaRech: DotationUcaRech = new DotationUcaRech();

  constructor(
    private dotationUcaRechService: DotationUcaRechService,
    public dialogRef: MatDialogRef<EditDotationUcaRechModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.editedDotationUcaRech = this.data.dotationUcaRech;
  }

  ngOnInit() {

  }

  public onEditDotationUcaRech(editDotationUcaRechForm: any): void {
    console.log(editDotationUcaRechForm.value);
    this.dotationUcaRechService.updateDotationUcaRech(this.editedDotationUcaRech.id, this.editedDotationUcaRech).subscribe(
      (response: DotationUcaRech) => {
        this.dialogRef.close();
        showAlert('success', 'Success', 'DotationUcaRech updated successfully!');
      }
    );
  }

  public onCancel(): void {
    this.dialogRef.close();
  }
}
