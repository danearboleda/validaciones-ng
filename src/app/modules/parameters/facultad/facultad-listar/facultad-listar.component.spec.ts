import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadListarComponent } from './facultad-listar.component';

describe('FacultadListarComponent', () => {
  let component: FacultadListarComponent;
  let fixture: ComponentFixture<FacultadListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
