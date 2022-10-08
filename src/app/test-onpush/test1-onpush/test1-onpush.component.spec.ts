import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1OnpushComponent } from './test1-onpush.component';

describe('Test1OnpushComponent', () => {
  let component: Test1OnpushComponent;
  let fixture: ComponentFixture<Test1OnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1OnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1OnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
