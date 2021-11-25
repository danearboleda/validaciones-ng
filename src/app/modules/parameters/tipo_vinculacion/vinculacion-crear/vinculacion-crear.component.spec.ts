import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionCrearComponent } from './vinculacion-crear.component';

describe('VinculacionCrearComponent', () => {
  let component: VinculacionCrearComponent;
  let fixture: ComponentFixture<VinculacionCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
