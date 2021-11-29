import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudListarComponent } from './esolicitud-listar.component';

describe('EsolicitudListarComponent', () => {
  let component: EsolicitudListarComponent;
  let fixture: ComponentFixture<EsolicitudListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
