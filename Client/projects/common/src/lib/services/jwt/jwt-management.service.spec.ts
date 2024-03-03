import {TestBed} from '@angular/core/testing';

import {JwtManagementService} from './jwt-management.service';

describe('JwtManagementService', () => {
  let service: JwtManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
