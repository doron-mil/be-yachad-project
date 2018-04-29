import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColContent3Component } from './my-col-content3.component';

describe('MyColContent3Component', () => {
  let component: MyColContent3Component;
  let fixture: ComponentFixture<MyColContent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyColContent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyColContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
