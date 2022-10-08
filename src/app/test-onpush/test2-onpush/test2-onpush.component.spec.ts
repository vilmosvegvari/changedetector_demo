import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2OnpushComponent } from './test2-onpush.component';

describe('Test2OnpushComponent', () => {
  let component: Test2OnpushComponent;
  let fixture: ComponentFixture<Test2OnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2OnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2OnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
