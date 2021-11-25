import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadCrearComponent } from './modalidad-crear.component';

describe('ModalidadCrearComponent', () => {
  let component: ModalidadCrearComponent;
  let fixture: ComponentFixture<ModalidadCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
