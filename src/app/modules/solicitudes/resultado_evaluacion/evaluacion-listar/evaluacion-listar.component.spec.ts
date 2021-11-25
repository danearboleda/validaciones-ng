import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionListarComponent } from './evaluacion-listar.component';

describe('EvaluacionListarComponent', () => {
  let component: EvaluacionListarComponent;
  let fixture: ComponentFixture<EvaluacionListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
