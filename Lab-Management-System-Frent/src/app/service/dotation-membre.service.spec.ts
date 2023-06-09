import { TestBed } from '@angular/core/testing';

import { Dotation_MembreService } from './dotation-membre.service';

describe('DotationMembreService', () => {
  let service: Dotation_MembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dotation_MembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
