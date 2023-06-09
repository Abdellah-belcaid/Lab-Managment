import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpressionBesoinModalComponent } from './edit-expression-besoin-modal.component';

describe('EditExpressionBesoinModalComponent', () => {
  let component: EditExpressionBesoinModalComponent;
  let fixture: ComponentFixture<EditExpressionBesoinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpressionBesoinModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExpressionBesoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
