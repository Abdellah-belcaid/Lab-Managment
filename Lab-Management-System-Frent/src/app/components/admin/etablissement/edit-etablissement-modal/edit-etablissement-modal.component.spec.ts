import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtablissementModalComponent } from './edit-etablissement-modal.component';

describe('EditEtablissementModalComponent', () => {
  let component: EditEtablissementModalComponent;
  let fixture: ComponentFixture<EditEtablissementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEtablissementModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEtablissementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
