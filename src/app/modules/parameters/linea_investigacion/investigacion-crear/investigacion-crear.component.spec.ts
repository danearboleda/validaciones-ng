import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionCrearComponent } from './investigacion-crear.component';

describe('InvestigacionCrearComponent', () => {
  let component: InvestigacionCrearComponent;
  let fixture: ComponentFixture<InvestigacionCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigacionCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
