import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteCrearComponent } from './proponente-crear.component';

describe('ProponenteCrearComponent', () => {
  let component: ProponenteCrearComponent;
  let fixture: ComponentFixture<ProponenteCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
