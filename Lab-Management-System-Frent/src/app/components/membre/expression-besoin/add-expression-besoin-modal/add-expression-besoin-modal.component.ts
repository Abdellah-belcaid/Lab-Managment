import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExpressionBesoin } from 'src/app/model/expressionBesoin.model';

import { ExpressionBesoinType } from 'src/app/model/expressionBesoinType.enum';
import { Membre } from 'src/app/model/membre.model';
import { Responsable } from 'src/app/model/responsable.model';
import { Role } from 'src/app/model/role.enum';
import { TypeBesoin } from 'src/app/model/typeBesoin.model';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ExpressionBesoinService } from 'src/app/service/expression-besoin.service';
import { MembreService } from 'src/app/service/membre.service';
import { ResponsableService } from 'src/app/service/responsable.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-add-expression-besoin-modal',
  templateUrl: './add-expression-besoin-modal.component.html',
  styleUrls: ['./add-expression-besoin-modal.component.css']
})
export class AddExpressionBesoinModalComponent implements OnInit {

  public newExpressionBesoin: ExpressionBesoin = new ExpressionBesoin();
  public responsables: Responsable[] = [];
  public membres: Membre[] = [];
  public expressionBesoinTypes: string[] = Object.keys(ExpressionBesoinType);
  public typeBesoins: TypeBesoin[] = [];

  public currentUser: User = new User();

  constructor(
    private expressionBesoinService: ExpressionBesoinService,
    public dialogRef: MatDialogRef<AddExpressionBesoinModalComponent>,
    private membreService: MembreService,
    private authenticationService: AuthenticationService,
    private responsableService: ResponsableService,
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {
    this.getMembres();
    this.populateTypeBesoins();
    this.getResponsables();
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
    this.expressionBesoinService.createExpressionBesoin(this.newExpressionBesoin).subscribe(
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



  private getResponsables(): void {
    this.responsableService.getAllResponsables().subscribe(
      (responsables: Responsable[]) => {
        this.responsables = responsables;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  isDirector(): boolean {
    return this.currentUser.role === Role.DIRECTOR || this.currentUser.role === Role.ADMIN;
  }

}
