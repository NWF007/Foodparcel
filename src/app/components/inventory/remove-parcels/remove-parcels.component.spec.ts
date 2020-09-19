import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveParcelsComponent } from './remove-parcels.component';

describe('RemoveParcelsComponent', () => {
  let component: RemoveParcelsComponent;
  let fixture: ComponentFixture<RemoveParcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveParcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
