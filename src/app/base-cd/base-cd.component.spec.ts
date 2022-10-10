import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCDComponent } from './base-cd.component';

describe('BaseCDComponent', () => {
  let component: BaseCDComponent;
  let fixture: ComponentFixture<BaseCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
