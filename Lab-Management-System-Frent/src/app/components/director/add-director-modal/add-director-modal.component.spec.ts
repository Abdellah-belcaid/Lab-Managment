import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDirectorModalComponent } from './add-director-modal.component';

describe('AddDirectorModalComponent', () => {
  let component: AddDirectorModalComponent;
  let fixture: ComponentFixture<AddDirectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDirectorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDirectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
