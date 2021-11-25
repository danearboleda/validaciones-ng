import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudEditarComponent } from './esolicitud-editar.component';

describe('EsolicitudEditarComponent', () => {
  let component: EsolicitudEditarComponent;
  let fixture: ComponentFixture<EsolicitudEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
