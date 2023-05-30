import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetModalComponent } from './edit-projet-modal.component';

describe('EditProjetModalComponent', () => {
  let component: EditProjetModalComponent;
  let fixture: ComponentFixture<EditProjetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjetModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
