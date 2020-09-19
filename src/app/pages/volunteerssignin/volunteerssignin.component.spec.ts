import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerssigninComponent } from './volunteerssignin.component';

describe('VolunteerssigninComponent', () => {
  let component: VolunteerssigninComponent;
  let fixture: ComponentFixture<VolunteerssigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerssigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerssigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
