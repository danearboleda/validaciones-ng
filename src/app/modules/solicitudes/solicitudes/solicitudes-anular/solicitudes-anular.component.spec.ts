import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesAnularComponent } from './solicitudes-anular.component';

describe('SolicitudesAnularComponent', () => {
  let component: SolicitudesAnularComponent;
  let fixture: ComponentFixture<SolicitudesAnularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesAnularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesAnularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
