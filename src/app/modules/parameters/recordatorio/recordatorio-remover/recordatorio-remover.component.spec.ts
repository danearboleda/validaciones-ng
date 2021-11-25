import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioRemoverComponent } from './recordatorio-remover.component';

describe('RecordatorioRemoverComponent', () => {
  let component: RecordatorioRemoverComponent;
  let fixture: ComponentFixture<RecordatorioRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatorioRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
