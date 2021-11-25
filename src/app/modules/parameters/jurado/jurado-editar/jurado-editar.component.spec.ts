import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoEditarComponent } from './jurado-editar.component';

describe('JuradoEditarComponent', () => {
  let component: JuradoEditarComponent;
  let fixture: ComponentFixture<JuradoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
