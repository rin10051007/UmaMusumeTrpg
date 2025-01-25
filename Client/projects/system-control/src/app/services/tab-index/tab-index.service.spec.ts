import { TestBed } from '@angular/core/testing';

import { TabIndexService } from './tab-index.service';

describe('TabIndexService', () => {
  let service: TabIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
