import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoListarComponent } from './jurado-listar.component';

describe('JuradoListarComponent', () => {
  let component: JuradoListarComponent;
  let fixture: ComponentFixture<JuradoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
