import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionEditarComponent } from './vinculacion-editar.component';

describe('VinculacionEditarComponent', () => {
  let component: VinculacionEditarComponent;
  let fixture: ComponentFixture<VinculacionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
