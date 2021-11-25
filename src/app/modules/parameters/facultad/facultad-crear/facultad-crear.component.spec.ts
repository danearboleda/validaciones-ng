import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadCrearComponent } from './facultad-crear.component';

describe('FacultadCrearComponent', () => {
  let component: FacultadCrearComponent;
  let fixture: ComponentFixture<FacultadCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
