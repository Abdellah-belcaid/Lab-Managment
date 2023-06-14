import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetData } from 'src/app/model/BudgetData.model';

@Component({
  selector: 'app-budget-data-summery',
  templateUrl: './budget-data-summery.component.html',
  styleUrls: ['./budget-data-summery.component.css']
})
export class BudgetDataSummeryComponent {

  public budgetData: BudgetData = new BudgetData();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    this.budgetData.assignValuesFromLaboratoire(this.data , 2023);
  }

}
