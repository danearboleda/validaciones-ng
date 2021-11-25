import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudSolicitudComponent } from './esolicitud-solicitud.component';

describe('EsolicitudSolicitudComponent', () => {
  let component: EsolicitudSolicitudComponent;
  let fixture: ComponentFixture<EsolicitudSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
