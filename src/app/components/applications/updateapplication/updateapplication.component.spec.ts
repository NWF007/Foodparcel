import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateapplicationComponent } from './updateapplication.component';

describe('UpdateapplicationComponent', () => {
  let component: UpdateapplicationComponent;
  let fixture: ComponentFixture<UpdateapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
