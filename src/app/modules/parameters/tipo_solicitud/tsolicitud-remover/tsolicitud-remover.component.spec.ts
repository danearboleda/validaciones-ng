import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsolicitudRemoverComponent } from './tsolicitud-remover.component';

describe('TsolicitudRemoverComponent', () => {
  let component: TsolicitudRemoverComponent;
  let fixture: ComponentFixture<TsolicitudRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsolicitudRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsolicitudRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
