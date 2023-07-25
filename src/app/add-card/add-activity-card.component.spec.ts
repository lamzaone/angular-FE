import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityCardComponent } from './add-activity-card.component';

describe('AddActivityCardComponent', () => {
  let component: AddActivityCardComponent;
  let fixture: ComponentFixture<AddActivityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActivityCardComponent]
    });
    fixture = TestBed.createComponent(AddActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
