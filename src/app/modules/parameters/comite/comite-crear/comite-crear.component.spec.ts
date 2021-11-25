import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteCrearComponent } from './comite-crear.component';

describe('ComiteCrearComponent', () => {
  let component: ComiteCrearComponent;
  let fixture: ComponentFixture<ComiteCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
