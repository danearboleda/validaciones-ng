import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEditarComponent } from './solicitudes-editar.component';

describe('SolicitudesEditarComponent', () => {
  let component: SolicitudesEditarComponent;
  let fixture: ComponentFixture<SolicitudesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
