import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesCardComponent } from './grades-card.component';

describe('GradesCardComponent', () => {
  let component: GradesCardComponent;
  let fixture: ComponentFixture<GradesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradesCardComponent]
    });
    fixture = TestBed.createComponent(GradesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
