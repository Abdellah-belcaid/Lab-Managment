import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationProjetComponent } from './dotation-projet.component';

describe('DotationProjetComponent', () => {
  let component: DotationProjetComponent;
  let fixture: ComponentFixture<DotationProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotationProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotationProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
