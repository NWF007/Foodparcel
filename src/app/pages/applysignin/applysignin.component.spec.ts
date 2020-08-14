import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplysigninComponent } from './applysignin.component';

describe('ApplysigninComponent', () => {
  let component: ApplysigninComponent;
  let fixture: ComponentFixture<ApplysigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplysigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplysigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
