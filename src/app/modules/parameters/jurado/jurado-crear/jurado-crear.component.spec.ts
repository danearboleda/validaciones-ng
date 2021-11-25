import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoCrearComponent } from './jurado-crear.component';

describe('JuradoCrearComponent', () => {
  let component: JuradoCrearComponent;
  let fixture: ComponentFixture<JuradoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
