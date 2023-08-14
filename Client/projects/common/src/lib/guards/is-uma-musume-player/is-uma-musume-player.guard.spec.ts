import {TestBed} from '@angular/core/testing';

import {IsUmaMusumePlayerGuard} from './is-uma-musume-player.guard';

describe('IsUmaMusumePlayerGuard', () => {
  let guard: IsUmaMusumePlayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUmaMusumePlayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
