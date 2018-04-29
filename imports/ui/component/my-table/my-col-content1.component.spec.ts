import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColContent1Component } from './my-col-content1.component';

describe('MyColContent1Component', () => {
  let component: MyColContent1Component;
  let fixture: ComponentFixture<MyColContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyColContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyColContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
