import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsolicitudEditarComponent } from './tsolicitud-editar.component';

describe('TsolicitudEditarComponent', () => {
  let component: TsolicitudEditarComponent;
  let fixture: ComponentFixture<TsolicitudEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsolicitudEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsolicitudEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
