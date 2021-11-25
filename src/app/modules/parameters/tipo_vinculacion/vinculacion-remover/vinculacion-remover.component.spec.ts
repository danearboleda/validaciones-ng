import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionRemoverComponent } from './vinculacion-remover.component';

describe('VinculacionRemoverComponent', () => {
  let component: VinculacionRemoverComponent;
  let fixture: ComponentFixture<VinculacionRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
