import { TestBed } from '@angular/core/testing';

import { DotationProjetService } from './dotation-projet.service';

describe('DotationProjetService', () => {
  let service: DotationProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotationProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
