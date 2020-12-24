import { TestBed } from '@angular/core/testing';

import { Funciones2Service } from './funciones2.service';

describe('Funciones2Service', () => {
  let service: Funciones2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Funciones2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
