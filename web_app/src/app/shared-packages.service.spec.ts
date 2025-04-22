import { TestBed } from '@angular/core/testing';

import { SharedPackagesService } from './shared-packages.service';

describe('SharedPackagesService', () => {
  let service: SharedPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
