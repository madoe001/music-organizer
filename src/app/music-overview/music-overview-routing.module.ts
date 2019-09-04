import { MusicOverviewComponent } from './music-overview/music-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const musicRoutes: Routes = [
  { path: 'overview', component: MusicOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(musicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MusicRoutingModule { }
