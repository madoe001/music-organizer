import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicOverviewComponent } from './music-overview/music-overview.component';
import { MusicOverviewListComponent } from './music-overview-list/music-overview-list.component';
import { MusicOverviewListItemComponent } from './music-overview-list-item/music-overview-list-item.component';
import { MusicRoutingModule } from './music-overview-routing.module';

@NgModule({
  declarations: [
    MusicOverviewComponent,
    MusicOverviewListComponent,
    MusicOverviewListItemComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
  ]
})
export class MusicOverviewModule { }
