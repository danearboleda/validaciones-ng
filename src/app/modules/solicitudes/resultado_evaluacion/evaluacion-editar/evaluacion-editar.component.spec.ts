import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEditarComponent } from './evaluacion-editar.component';

describe('EvaluacionEditarComponent', () => {
  let component: EvaluacionEditarComponent;
  let fixture: ComponentFixture<EvaluacionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
