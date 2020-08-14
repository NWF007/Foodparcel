import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatesigninComponent } from './donatesignin.component';

describe('DonatesigninComponent', () => {
  let component: DonatesigninComponent;
  let fixture: ComponentFixture<DonatesigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatesigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatesigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
