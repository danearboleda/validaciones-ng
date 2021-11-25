import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInvestigacionComponent } from './solicitud-investigacion.component';

describe('SolicitudInvestigacionComponent', () => {
  let component: SolicitudInvestigacionComponent;
  let fixture: ComponentFixture<SolicitudInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
