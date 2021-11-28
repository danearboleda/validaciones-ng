import { TestBed } from '@angular/core/testing';

import { DepartamentoProponenteService } from './departamento-proponente.service';

describe('DepartamentoProponenteService', () => {
  let service: DepartamentoProponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentoProponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
