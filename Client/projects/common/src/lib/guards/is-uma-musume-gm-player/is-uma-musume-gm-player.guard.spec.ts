import {TestBed} from '@angular/core/testing';

import {IsUmaMusumeGmPlayerGuard} from './is-uma-musume-gm-player.guard';

describe('IsUmaMusumeGmPlayerGuard', () => {
  let guard: IsUmaMusumeGmPlayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUmaMusumeGmPlayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
