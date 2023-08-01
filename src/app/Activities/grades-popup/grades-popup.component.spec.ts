import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesPopupComponent } from './grades-popup.component';

describe('GradesPopupComponent', () => {
  let component: GradesPopupComponent;
  let fixture: ComponentFixture<GradesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradesPopupComponent]
    });
    fixture = TestBed.createComponent(GradesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
