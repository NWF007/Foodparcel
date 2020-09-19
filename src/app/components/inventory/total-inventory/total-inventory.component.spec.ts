import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInventoryComponent } from './total-inventory.component';

describe('TotalInventoryComponent', () => {
  let component: TotalInventoryComponent;
  let fixture: ComponentFixture<TotalInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
