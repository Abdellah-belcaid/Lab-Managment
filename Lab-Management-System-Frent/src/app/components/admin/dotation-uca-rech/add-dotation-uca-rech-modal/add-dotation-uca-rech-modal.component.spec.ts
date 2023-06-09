import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDotationUcaRechModalComponent } from './add-dotation-uca-rech-modal.component';

describe('AddDotationUcaRechModalComponent', () => {
  let component: AddDotationUcaRechModalComponent;
  let fixture: ComponentFixture<AddDotationUcaRechModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDotationUcaRechModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDotationUcaRechModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
