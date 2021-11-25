import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteListarComponent } from './proponente-listar.component';

describe('ProponenteListarComponent', () => {
  let component: ProponenteListarComponent;
  let fixture: ComponentFixture<ProponenteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
