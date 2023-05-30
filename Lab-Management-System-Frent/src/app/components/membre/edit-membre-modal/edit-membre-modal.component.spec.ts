import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembreModalComponent } from './edit-membre-modal.component';

describe('EditMembreModalComponent', () => {
  let component: EditMembreModalComponent;
  let fixture: ComponentFixture<EditMembreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMembreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMembreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
