import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExpandListComponent } from './profile-expand-list.component';

describe('ProfileExpandListComponent', () => {
  let component: ProfileExpandListComponent;
  let fixture: ComponentFixture<ProfileExpandListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileExpandListComponent]
    });
    fixture = TestBed.createComponent(ProfileExpandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
