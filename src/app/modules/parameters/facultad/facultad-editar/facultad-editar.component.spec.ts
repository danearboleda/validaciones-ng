import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadEditarComponent } from './facultad-editar.component';

describe('FacultadEditarComponent', () => {
  let component: FacultadEditarComponent;
  let fixture: ComponentFixture<FacultadEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
