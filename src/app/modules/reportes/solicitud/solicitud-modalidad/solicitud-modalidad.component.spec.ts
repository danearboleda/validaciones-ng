import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudModalidadComponent } from './solicitud-modalidad.component';

describe('SolicitudModalidadComponent', () => {
  let component: SolicitudModalidadComponent;
  let fixture: ComponentFixture<SolicitudModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
