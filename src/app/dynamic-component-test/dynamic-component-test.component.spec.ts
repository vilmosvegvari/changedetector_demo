import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentTestComponent } from './dynamic-component-test.component';

describe('DynamicComponentTestComponent', () => {
  let component: DynamicComponentTestComponent;
  let fixture: ComponentFixture<DynamicComponentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComponentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
