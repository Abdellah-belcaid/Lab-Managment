import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationMembreComponent } from './dotation-membre.component';

describe('DotationMembreComponent', () => {
  let component: DotationMembreComponent;
  let fixture: ComponentFixture<DotationMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotationMembreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotationMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
