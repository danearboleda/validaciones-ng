import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadRemoverComponent } from './modalidad-remover.component';

describe('ModalidadRemoverComponent', () => {
  let component: ModalidadRemoverComponent;
  let fixture: ComponentFixture<ModalidadRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
