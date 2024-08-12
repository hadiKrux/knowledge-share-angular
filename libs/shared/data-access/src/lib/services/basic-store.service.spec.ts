import { TestBed } from '@angular/core/testing';

import { BasicStoreService } from './basic-store.service';

describe('BasicStoreService', () => {
  let service: BasicStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
