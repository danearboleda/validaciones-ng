import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionEditarComponent } from './investigacion-editar.component';

describe('InvestigacionEditarComponent', () => {
  let component: InvestigacionEditarComponent;
  let fixture: ComponentFixture<InvestigacionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigacionEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
