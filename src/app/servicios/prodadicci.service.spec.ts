import { TestBed } from '@angular/core/testing';

import { ProdadicciService } from './prodadicci.service';

describe('ProdadicciService', () => {
  let service: ProdadicciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdadicciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
