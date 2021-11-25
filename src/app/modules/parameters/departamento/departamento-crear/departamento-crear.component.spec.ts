import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCrearComponent } from './departamento-crear.component';

describe('DepartamentoCrearComponent', () => {
  let component: DepartamentoCrearComponent;
  let fixture: ComponentFixture<DepartamentoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
