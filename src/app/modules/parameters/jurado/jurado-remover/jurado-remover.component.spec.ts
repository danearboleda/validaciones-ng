import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoRemoverComponent } from './jurado-remover.component';

describe('JuradoRemoverComponent', () => {
  let component: JuradoRemoverComponent;
  let fixture: ComponentFixture<JuradoRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
