import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionListarComponent } from './vinculacion-listar.component';

describe('VinculacionListarComponent', () => {
  let component: VinculacionListarComponent;
  let fixture: ComponentFixture<VinculacionListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
