import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpressionBesoinModalComponent } from './add-expression-besoin-modal.component';

describe('AddExpressionBesoinModalComponent', () => {
  let component: AddExpressionBesoinModalComponent;
  let fixture: ComponentFixture<AddExpressionBesoinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpressionBesoinModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpressionBesoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
