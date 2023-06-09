import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationUcaRechComponent } from './dotation-uca-rech.component';

describe('DotationUcaRechComponent', () => {
  let component: DotationUcaRechComponent;
  let fixture: ComponentFixture<DotationUcaRechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotationUcaRechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotationUcaRechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
