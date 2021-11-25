import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudJuradoComponent } from './esolicitud-jurado.component';

describe('EsolicitudJuradoComponent', () => {
  let component: EsolicitudJuradoComponent;
  let fixture: ComponentFixture<EsolicitudJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
