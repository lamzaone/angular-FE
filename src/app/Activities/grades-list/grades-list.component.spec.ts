import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesListComponent } from './grades-list.component';

describe('GradesListComponent', () => {
  let component: GradesListComponent;
  let fixture: ComponentFixture<GradesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradesListComponent]
    });
    fixture = TestBed.createComponent(GradesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
