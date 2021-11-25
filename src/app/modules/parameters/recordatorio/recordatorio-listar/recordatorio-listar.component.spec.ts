import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioListarComponent } from './recordatorio-listar.component';

describe('RecordatorioListarComponent', () => {
  let component: RecordatorioListarComponent;
  let fixture: ComponentFixture<RecordatorioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatorioListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
