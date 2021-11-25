import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteRemoverComponent } from './comite-remover.component';

describe('ComiteRemoverComponent', () => {
  let component: ComiteRemoverComponent;
  let fixture: ComponentFixture<ComiteRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
