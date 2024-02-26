import { TestBed } from '@angular/core/testing';

import { IsSysPermissionToAdminGuard } from './is-sys-permission-to-admin.guard';

describe('IsSysPermissionToAdminGuard', () => {
  let guard: IsSysPermissionToAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSysPermissionToAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
