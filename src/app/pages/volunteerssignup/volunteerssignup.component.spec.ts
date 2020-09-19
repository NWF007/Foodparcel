import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerssignupComponent } from './volunteerssignup.component';

describe('VolunteerssignupComponent', () => {
  let component: VolunteerssignupComponent;
  let fixture: ComponentFixture<VolunteerssignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerssignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerssignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
