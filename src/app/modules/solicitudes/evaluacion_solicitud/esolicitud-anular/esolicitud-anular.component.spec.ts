import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsolicitudAnularComponent } from './esolicitud-anular.component';

describe('EsolicitudAnularComponent', () => {
  let component: EsolicitudAnularComponent;
  let fixture: ComponentFixture<EsolicitudAnularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsolicitudAnularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsolicitudAnularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
