import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoloyIconComponent } from './technoloy-icon.component';

describe('TechnoloyIconComponent', () => {
  let component: TechnoloyIconComponent;
  let fixture: ComponentFixture<TechnoloyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoloyIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnoloyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
