import {TestBed} from '@angular/core/testing';

import {IsLoginIdDuplicateApiService} from './is-login-id-duplicate-api.service';

describe('IsLoginIdDuplicateApiService', () => {
  let service: IsLoginIdDuplicateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoginIdDuplicateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
