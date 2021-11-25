import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioEditarComponent } from './recordatorio-editar.component';

describe('RecordatorioEditarComponent', () => {
  let component: RecordatorioEditarComponent;
  let fixture: ComponentFixture<RecordatorioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatorioEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
