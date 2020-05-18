import { TestBed } from '@angular/core/testing';

import { OmbdApiServiceService } from './ombd-api-service.service';

describe('OmbdApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmbdApiServiceService = TestBed.get(OmbdApiServiceService);
    expect(service).toBeTruthy();
  });
});
