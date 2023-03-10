import { TestBed } from '@angular/core/testing';

import { NewsAppApiService } from './news-app-api.service';

describe('NewsAppApiService', () => {
  let service: NewsAppApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAppApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
