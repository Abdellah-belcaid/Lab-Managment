import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjetModalComponent } from './add-projet-modal.component';

describe('AddProjetModalComponent', () => {
  let component: AddProjetModalComponent;
  let fixture: ComponentFixture<AddProjetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjetModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
