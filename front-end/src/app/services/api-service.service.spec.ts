import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api-service.service';
import { Http, HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, Http, HttpModule, HttpClientModule]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
