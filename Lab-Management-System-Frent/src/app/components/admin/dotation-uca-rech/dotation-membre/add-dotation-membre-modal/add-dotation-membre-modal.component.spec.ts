import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDotationMembreModalComponent } from './add-dotation-membre-modal.component';

describe('AddDotationMembreModalComponent', () => {
  let component: AddDotationMembreModalComponent;
  let fixture: ComponentFixture<AddDotationMembreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDotationMembreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDotationMembreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
