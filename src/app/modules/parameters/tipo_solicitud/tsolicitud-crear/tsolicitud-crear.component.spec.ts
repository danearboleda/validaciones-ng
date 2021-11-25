import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsolicitudCrearComponent } from './tsolicitud-crear.component';

describe('TsolicitudCrearComponent', () => {
  let component: TsolicitudCrearComponent;
  let fixture: ComponentFixture<TsolicitudCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsolicitudCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsolicitudCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
