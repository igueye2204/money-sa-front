import { TestBed } from '@angular/core/testing';

import { CostumevalidationService } from './costumevalidation.service';

describe('CostumevalidationService', () => {
  let service: CostumevalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumevalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
