import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSigninScreenComponent } from './app-signin-screen.component';

describe('AppSigninScreenComponent', () => {
  let component: AppSigninScreenComponent;
  let fixture: ComponentFixture<AppSigninScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSigninScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSigninScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
