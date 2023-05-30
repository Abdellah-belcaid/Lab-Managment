import { TestBed } from '@angular/core/testing';

import { ExpressionBesoinService } from './expression-besoin.service';

describe('ExpressionBesoinService', () => {
  let service: ExpressionBesoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressionBesoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
