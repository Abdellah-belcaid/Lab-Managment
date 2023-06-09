import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDotationUcaRechModalComponent } from './edit-dotation-uca-rech-modal.component';

describe('EditDotationUcaRechModalComponent', () => {
  let component: EditDotationUcaRechModalComponent;
  let fixture: ComponentFixture<EditDotationUcaRechModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDotationUcaRechModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDotationUcaRechModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
