import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingContentComponent } from './ongoing-content.component';

describe('OngoingContentComponent', () => {
  let component: OngoingContentComponent;
  let fixture: ComponentFixture<OngoingContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OngoingContentComponent]
    });
    fixture = TestBed.createComponent(OngoingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
