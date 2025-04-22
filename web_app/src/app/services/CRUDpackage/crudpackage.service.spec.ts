import { TestBed } from '@angular/core/testing';

import { CRUDpackageService } from './crudpackage.service';

describe('CRUDpackageService', () => {
  let service: CRUDpackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDpackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
