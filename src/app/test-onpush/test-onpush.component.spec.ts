import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnpushComponent } from './test-onpush.component';

describe('TestOnpushComponent', () => {
  let component: TestOnpushComponent;
  let fixture: ComponentFixture<TestOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
