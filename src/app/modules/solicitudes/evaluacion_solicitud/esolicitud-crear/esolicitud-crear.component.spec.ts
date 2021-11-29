import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudCrearComponent } from './esolicitud-crear.component';

describe('EsolicitudCrearComponent', () => {
  let component: EsolicitudCrearComponent;
  let fixture: ComponentFixture<EsolicitudCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
