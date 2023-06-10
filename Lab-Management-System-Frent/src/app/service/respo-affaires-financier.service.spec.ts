import { TestBed } from '@angular/core/testing';

import { RespoAffairesFinancierService } from './respo-affaires-financier.service';

describe('RespoAffairesFinancierService', () => {
  let service: RespoAffairesFinancierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespoAffairesFinancierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
