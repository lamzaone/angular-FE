import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuCardComponent } from './side-menu-card.component';

describe('SideMenuCardComponent', () => {
  let component: SideMenuCardComponent;
  let fixture: ComponentFixture<SideMenuCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideMenuCardComponent]
    });
    fixture = TestBed.createComponent(SideMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
