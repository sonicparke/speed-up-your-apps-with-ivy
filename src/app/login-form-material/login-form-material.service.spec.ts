import { TestBed } from '@angular/core/testing';

import { LoginFormMaterialService } from './login-form-material.service';

describe('LoginFormMaterialService', () => {
  let service: LoginFormMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
