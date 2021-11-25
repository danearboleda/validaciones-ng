import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsolicitudListarComponent } from './tsolicitud-listar.component';

describe('TsolicitudListarComponent', () => {
  let component: TsolicitudListarComponent;
  let fixture: ComponentFixture<TsolicitudListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsolicitudListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsolicitudListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
