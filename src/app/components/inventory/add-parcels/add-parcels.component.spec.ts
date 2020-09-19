import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParcelsComponent } from './add-parcels.component';

describe('AddParcelsComponent', () => {
  let component: AddParcelsComponent;
  let fixture: ComponentFixture<AddParcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
