import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteEditarComponent } from './comite-editar.component';

describe('ComiteEditarComponent', () => {
  let component: ComiteEditarComponent;
  let fixture: ComponentFixture<ComiteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
