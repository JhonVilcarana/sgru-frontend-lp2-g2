import { TestBed } from '@angular/core/testing';

import { NivCompCurService } from './niv-comp-cur.service';

describe('NivCompCurService', () => {
  let service: NivCompCurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivCompCurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
