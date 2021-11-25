import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolicitudCrearComponent } from './csolicitud-crear.component';

describe('CsolicitudCrearComponent', () => {
  let component: CsolicitudCrearComponent;
  let fixture: ComponentFixture<CsolicitudCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsolicitudCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsolicitudCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
