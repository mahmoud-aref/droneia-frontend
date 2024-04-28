import { TestBed } from '@angular/core/testing';

import { AuthGuard } from '@infrastructure/auth/auth.guard';

describe('GuardService', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
