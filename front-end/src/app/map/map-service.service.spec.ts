import { TestBed, inject } from '@angular/core/testing';

import { MapServiceService } from './map-service.service';

describe('MapServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapServiceService]
    });
  });

  it('should be created', inject([MapServiceService], (service: MapServiceService) => {
    expect(service).toBeTruthy();
  }));
});
