import { TestBed } from '@angular/core/testing';

import { AdicionService } from './adicion.service';

describe('AdicionService', () => {
  let service: AdicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
