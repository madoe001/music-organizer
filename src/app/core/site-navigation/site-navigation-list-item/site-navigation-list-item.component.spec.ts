import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavigationListItemComponent } from './site-navigation-list-item.component';

describe('SiteNavigationListItemComponent', () => {
  let component: SiteNavigationListItemComponent;
  let fixture: ComponentFixture<SiteNavigationListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNavigationListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNavigationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
