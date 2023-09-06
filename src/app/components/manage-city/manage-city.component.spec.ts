import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCityComponent } from './manage-city.component';

describe('ManageCityComponent', () => {
  let component: ManageCityComponent;
  let fixture: ComponentFixture<ManageCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCityComponent]
    });
    fixture = TestBed.createComponent(ManageCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
