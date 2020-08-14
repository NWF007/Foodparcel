import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatesignupComponent } from './donatesignup.component';

describe('DonatesignupComponent', () => {
  let component: DonatesignupComponent;
  let fixture: ComponentFixture<DonatesignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatesignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
