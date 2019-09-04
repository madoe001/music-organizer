import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavigationListComponent } from './site-navigation-list.component';

describe('SiteNavigationListComponent', () => {
  let component: SiteNavigationListComponent;
  let fixture: ComponentFixture<SiteNavigationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNavigationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
