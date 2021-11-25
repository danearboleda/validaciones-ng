import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteRemoverComponent } from './proponente-remover.component';

describe('ProponenteRemoverComponent', () => {
  let component: ProponenteRemoverComponent;
  let fixture: ComponentFixture<ProponenteRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
