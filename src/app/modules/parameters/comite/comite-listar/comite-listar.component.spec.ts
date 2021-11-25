import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteListarComponent } from './comite-listar.component';

describe('ComiteListarComponent', () => {
  let component: ComiteListarComponent;
  let fixture: ComponentFixture<ComiteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
