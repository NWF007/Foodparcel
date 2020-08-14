import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplysignupComponent } from './applysignup.component';

describe('ApplysignupComponent', () => {
  let component: ApplysignupComponent;
  let fixture: ComponentFixture<ApplysignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplysignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
