import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolicitudEditarComponent } from './csolicitud-editar.component';

describe('CsolicitudEditarComponent', () => {
  let component: CsolicitudEditarComponent;
  let fixture: ComponentFixture<CsolicitudEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsolicitudEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsolicitudEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
