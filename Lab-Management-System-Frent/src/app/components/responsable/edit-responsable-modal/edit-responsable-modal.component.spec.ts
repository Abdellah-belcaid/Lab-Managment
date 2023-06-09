import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResponsableModalComponent } from './edit-responsable-modal.component';

describe('EditResponsableModalComponent', () => {
  let component: EditResponsableModalComponent;
  let fixture: ComponentFixture<EditResponsableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResponsableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditResponsableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
