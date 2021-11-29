import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionAnularComponent } from './evaluacion-anular.component';

describe('EvaluacionAnularComponent', () => {
  let component: EvaluacionAnularComponent;
  let fixture: ComponentFixture<EvaluacionAnularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionAnularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionAnularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
