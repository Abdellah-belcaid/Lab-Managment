import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLaboratoireModalComponent } from './edit-laboratoire-modal.component';

describe('EditLaboratoireModalComponent', () => {
  let component: EditLaboratoireModalComponent;
  let fixture: ComponentFixture<EditLaboratoireModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLaboratoireModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLaboratoireModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
