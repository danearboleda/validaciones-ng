import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioCrearComponent } from './recordatorio-crear.component';

describe('RecordatorioCrearComponent', () => {
  let component: RecordatorioCrearComponent;
  let fixture: ComponentFixture<RecordatorioCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatorioCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
