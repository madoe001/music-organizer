import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOverviewListComponent } from './music-overview-list.component';

describe('MusicOverviewListComponent', () => {
  let component: MusicOverviewListComponent;
  let fixture: ComponentFixture<MusicOverviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicOverviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
