import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoRemoverComponent } from './departamento-remover.component';

describe('DepartamentoRemoverComponent', () => {
  let component: DepartamentoRemoverComponent;
  let fixture: ComponentFixture<DepartamentoRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
