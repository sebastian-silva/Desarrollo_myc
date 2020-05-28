import { TestBed } from '@angular/core/testing';

import { DesayunoService } from './desayuno.service';

describe('DesayunoService', () => {
  let service: DesayunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesayunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
