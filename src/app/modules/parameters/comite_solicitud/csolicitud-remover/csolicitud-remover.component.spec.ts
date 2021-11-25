import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolicitudRemoverComponent } from './csolicitud-remover.component';

describe('CsolicitudRemoverComponent', () => {
  let component: CsolicitudRemoverComponent;
  let fixture: ComponentFixture<CsolicitudRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsolicitudRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsolicitudRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
