import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDotationProjetModalComponent } from './edit-dotation-projet-modal.component';

describe('EditDotationProjetModalComponent', () => {
  let component: EditDotationProjetModalComponent;
  let fixture: ComponentFixture<EditDotationProjetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDotationProjetModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDotationProjetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
