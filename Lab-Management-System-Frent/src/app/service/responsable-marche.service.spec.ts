import { TestBed } from '@angular/core/testing';

import { ResponsableMarcheService } from './responsable-marche.service';

describe('ResponsableMarcheService', () => {
  let service: ResponsableMarcheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableMarcheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
