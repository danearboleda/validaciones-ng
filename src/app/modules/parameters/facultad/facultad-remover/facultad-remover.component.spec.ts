import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadRemoverComponent } from './facultad-remover.component';

describe('FacultadRemoverComponent', () => {
  let component: FacultadRemoverComponent;
  let fixture: ComponentFixture<FacultadRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
