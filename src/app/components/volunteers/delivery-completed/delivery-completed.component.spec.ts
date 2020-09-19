import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCompletedComponent } from './delivery-completed.component';

describe('DeliveryCompletedComponent', () => {
  let component: DeliveryCompletedComponent;
  let fixture: ComponentFixture<DeliveryCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
