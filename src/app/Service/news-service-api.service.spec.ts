import { TestBed } from '@angular/core/testing';

import { NewsServiceApiService } from './news-service-api.service';

describe('NewsServiceApiService', () => {
  let service: NewsServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
