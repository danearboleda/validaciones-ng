import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadListarComponent } from './modalidad-listar.component';

describe('ModalidadListarComponent', () => {
  let component: ModalidadListarComponent;
  let fixture: ComponentFixture<ModalidadListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
