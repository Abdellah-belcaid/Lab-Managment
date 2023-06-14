import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DotationUcaRech } from 'src/app/model/dotationUcaRech.model';
import { DotationUcaRechService } from 'src/app/service/dotation-uca-rech.service';
import { showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-dotation-uca-rech-modal',
  templateUrl: './add-dotation-uca-rech-modal.component.html',
  styleUrls: ['./add-dotation-uca-rech-modal.component.css']
})
export class AddDotationUcaRechModalComponent {

  public newDotationUcaRech: DotationUcaRech = new DotationUcaRech();

  constructor(
    private dotationUcaRechService: DotationUcaRechService,
    public dialogRef: MatDialogRef<AddDotationUcaRechModalComponent>,

  ) { }

  public onAddDotationUcaRech(dotationUcaRechForm: any): void {
    console.log(dotationUcaRechForm.value);
    this.dotationUcaRechService.addDotationUcaRech(this.newDotationUcaRech).subscribe(
      (response: DotationUcaRech) => {
        dotationUcaRechForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'DotationUcaRech added successfully!');
      }
    );
  }
}
















