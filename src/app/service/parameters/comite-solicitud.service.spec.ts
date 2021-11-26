import { TestBed } from '@angular/core/testing';

import { ComiteSolicitudService } from './comite-solicitud.service';

describe('ComiteSolicitudService', () => {
  let service: ComiteSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComiteSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
