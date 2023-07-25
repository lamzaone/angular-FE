import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesCardComponent } from './activities-card.component';

describe('ActivitiesCardComponent', () => {
  let component: ActivitiesCardComponent;
  let fixture: ComponentFixture<ActivitiesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesCardComponent]
    });
    fixture = TestBed.createComponent(ActivitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
