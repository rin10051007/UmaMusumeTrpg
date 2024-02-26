import { TestBed } from '@angular/core/testing';

import { AuthorityConfApiService } from './authority-conf-api.service';

describe('AuthorityConfApiService', () => {
  let service: AuthorityConfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorityConfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
