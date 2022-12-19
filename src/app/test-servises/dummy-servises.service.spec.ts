import { TestBed } from '@angular/core/testing';

import { DummyServisesService } from './dummy-servises.service';

describe('DummyServisesService', () => {
  let service: DummyServisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyServisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
