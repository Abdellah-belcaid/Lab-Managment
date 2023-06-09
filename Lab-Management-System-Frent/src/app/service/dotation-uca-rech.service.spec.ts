import { TestBed } from '@angular/core/testing';

import { DotationUcaRechService } from './dotation-uca-rech.service';

describe('DotationUcaRechService', () => {
  let service: DotationUcaRechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotationUcaRechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
