import { TestBed } from '@angular/core/testing';

import { OtrosProductosService } from './otros-productos.service';

describe('OtrosProductosService', () => {
  let service: OtrosProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrosProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
