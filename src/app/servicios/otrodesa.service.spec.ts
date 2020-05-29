import { TestBed } from '@angular/core/testing';

import { OtrodesaService } from './otrodesa.service';

describe('OtrodesaService', () => {
  let service: OtrodesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrodesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
