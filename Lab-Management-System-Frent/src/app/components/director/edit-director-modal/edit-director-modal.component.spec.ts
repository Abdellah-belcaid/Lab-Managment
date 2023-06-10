import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectorModalComponent } from './edit-director-modal.component';

describe('EditDirectorModalComponent', () => {
  let component: EditDirectorModalComponent;
  let fixture: ComponentFixture<EditDirectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDirectorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDirectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
