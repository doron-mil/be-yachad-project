import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColContent2Component } from './my-col-content2.component';

describe('MyColContent2Component', () => {
  let component: MyColContent2Component;
  let fixture: ComponentFixture<MyColContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyColContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyColContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
