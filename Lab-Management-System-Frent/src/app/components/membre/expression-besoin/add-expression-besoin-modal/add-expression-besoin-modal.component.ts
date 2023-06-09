import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Etablissement } from 'src/app/model/etablissement.model';
import { ExpressionBesoin } from 'src/app/model/expressionBesoin.model';

import { ExpressionBesoinType } from 'src/app/model/expressionBesoinType.enum';
import { Membre } from 'src/app/model/membre.model';
import { TypeBesoin } from 'src/app/model/typeBesoin.model';
import { ExpressionBesoinService } from 'src/app/service/expression-besoin.service';
import { MembreService } from 'src/app/service/membre.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-expression-besoin-modal',
  templateUrl: './add-expression-besoin-modal.component.html',
  styleUrls: ['./add-expression-besoin-modal.component.css']
})
export class AddExpressionBesoinModalComponent implements OnInit {

  public newExpressionBesoin: ExpressionBesoin = new ExpressionBesoin();

  public membres: Membre[] = [];
  public expressionBesoinTypes: string[] = Object.keys(ExpressionBesoinType);
  public typeBesoins: TypeBesoin[] = [];


  constructor(
    private expressionBesoinService: ExpressionBesoinService,
    public dialogRef: MatDialogRef<AddExpressionBesoinModalComponent>,
    private membreService: MembreService
  ) { }

  ngOnInit(): void {
    this.getMembres();
    this.populateTypeBesoins();
  }

  private populateTypeBesoins(): void {
    this.typeBesoins = this.expressionBesoinTypes.map(type => {
      return { id: null, type: type, expressionBesoin: null } as unknown as TypeBesoin;
    });
  }



  private getMembres(): void {
    this.membreService.getAllMembres().subscribe(
      (membres: Membre[]) => {
        this.membres = membres;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  public onAddExpressionBesoin(expressionBesoinForm: any): void {
    console.log(expressionBesoinForm.value);
    this.expressionBesoinService.createExpressionBesoin(expressionBesoinForm.value).subscribe(
      (response: ExpressionBesoin) => {
        expressionBesoinForm.reset();
        this.dialogRef.close();
        showAlert('success', 'Success', 'Expression Besoin added successfully!');
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }
}
