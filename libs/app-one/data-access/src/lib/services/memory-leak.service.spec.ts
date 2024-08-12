import { TestBed } from '@angular/core/testing';

import { MemoryLeakService } from './memory-leak.service';

describe('MemoryLeakService', () => {
  let service: MemoryLeakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryLeakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
