import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolicitudListarComponent } from './csolicitud-listar.component';

describe('CsolicitudListarComponent', () => {
  let component: CsolicitudListarComponent;
  let fixture: ComponentFixture<CsolicitudListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsolicitudListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsolicitudListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
