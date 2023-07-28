import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingActivitiesWidgetComponent } from './upcoming-activities-widget.component';

describe('UpcomingActivitiesWidgetComponent', () => {
  let component: UpcomingActivitiesWidgetComponent;
  let fixture: ComponentFixture<UpcomingActivitiesWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingActivitiesWidgetComponent]
    });
    fixture = TestBed.createComponent(UpcomingActivitiesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
