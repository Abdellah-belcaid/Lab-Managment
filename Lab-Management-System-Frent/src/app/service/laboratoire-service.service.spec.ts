import { TestBed } from '@angular/core/testing';

import { LaboratoireServiceService } from './laboratoire-service.service';

describe('LaboratoireServiceService', () => {
  let service: LaboratoireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
