import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionRemoverComponent } from './investigacion-remover.component';

describe('InvestigacionRemoverComponent', () => {
  let component: InvestigacionRemoverComponent;
  let fixture: ComponentFixture<InvestigacionRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigacionRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
