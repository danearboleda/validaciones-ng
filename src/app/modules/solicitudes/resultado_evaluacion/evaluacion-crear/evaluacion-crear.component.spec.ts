import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionCrearComponent } from './evaluacion-crear.component';

describe('EvaluacionCrearComponent', () => {
  let component: EvaluacionCrearComponent;
  let fixture: ComponentFixture<EvaluacionCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
