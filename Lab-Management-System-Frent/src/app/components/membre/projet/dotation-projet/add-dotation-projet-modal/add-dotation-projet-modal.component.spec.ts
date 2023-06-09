import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDotationProjectModalComponent } from './add-dotation-projet-modal.component';

describe('AddDotationProjectModalComponent', () => {
  let component: AddDotationProjectModalComponent;
  let fixture: ComponentFixture<AddDotationProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDotationProjectModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDotationProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
