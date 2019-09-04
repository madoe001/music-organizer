import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOverviewListItemComponent } from './music-overview-list-item.component';

describe('MusicOverviewListItemComponent', () => {
  let component: MusicOverviewListItemComponent;
  let fixture: ComponentFixture<MusicOverviewListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicOverviewListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicOverviewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
