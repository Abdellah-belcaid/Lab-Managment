import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponsableModalComponent } from './add-responsable-modal.component';

describe('AddResponsableModalComponent', () => {
  let component: AddResponsableModalComponent;
  let fixture: ComponentFixture<AddResponsableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponsableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponsableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
