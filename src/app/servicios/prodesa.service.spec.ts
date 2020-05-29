import { TestBed } from '@angular/core/testing';

import { ProdesaService } from './prodesa.service';

describe('ProdesaService', () => {
  let service: ProdesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
