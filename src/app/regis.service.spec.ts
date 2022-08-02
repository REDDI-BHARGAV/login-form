import { TestBed } from '@angular/core/testing';

import { RegisService } from './regis.service';

describe('RegisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisService = TestBed.get(RegisService);
    expect(service).toBeTruthy();
  });
});
