import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementListComponent } from './management-list.component';

describe('ManagementListComponent', () => {
  let component: ManagementListComponent;
  let fixture: ComponentFixture<ManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementListComponent]
    });
    fixture = TestBed.createComponent(ManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
