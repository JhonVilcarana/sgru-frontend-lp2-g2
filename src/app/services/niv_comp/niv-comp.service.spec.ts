import { TestBed } from '@angular/core/testing';

import { NivCompService } from './niv-comp.service';

describe('NivCompService', () => {
  let service: NivCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
