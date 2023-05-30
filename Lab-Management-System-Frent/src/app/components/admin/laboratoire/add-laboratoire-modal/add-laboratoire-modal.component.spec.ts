import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaboratoireModalComponent } from './add-laboratoire-modal.component';

describe('AddLaboratoireModalComponent', () => {
  let component: AddLaboratoireModalComponent;
  let fixture: ComponentFixture<AddLaboratoireModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLaboratoireModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLaboratoireModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
