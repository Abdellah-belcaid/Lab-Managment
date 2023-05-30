import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembreModalComponent } from './add-membre-modal.component';

describe('AddMembreModalComponent', () => {
  let component: AddMembreModalComponent;
  let fixture: ComponentFixture<AddMembreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMembreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
