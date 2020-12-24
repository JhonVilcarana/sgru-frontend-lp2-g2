import { TestBed } from '@angular/core/testing';

import { TipoEvaluadorService } from './tipo-evaluador.service';

describe('TipoEvaluadorService', () => {
  let service: TipoEvaluadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoEvaluadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
