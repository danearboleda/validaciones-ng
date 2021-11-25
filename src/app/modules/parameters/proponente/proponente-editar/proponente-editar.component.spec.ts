import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteEditarComponent } from './proponente-editar.component';

describe('ProponenteEditarComponent', () => {
  let component: ProponenteEditarComponent;
  let fixture: ComponentFixture<ProponenteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
