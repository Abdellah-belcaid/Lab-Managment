import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDataSummeryComponent } from './budget-data-summery.component';

describe('BudgetDataSummeryComponent', () => {
  let component: BudgetDataSummeryComponent;
  let fixture: ComponentFixture<BudgetDataSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetDataSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetDataSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
