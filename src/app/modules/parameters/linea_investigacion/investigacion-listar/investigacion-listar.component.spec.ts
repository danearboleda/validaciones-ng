import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionListarComponent } from './investigacion-listar.component';

describe('InvestigacionListarComponent', () => {
  let component: InvestigacionListarComponent;
  let fixture: ComponentFixture<InvestigacionListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigacionListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
