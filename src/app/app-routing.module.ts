import { StartPageComponent } from './core/start-page/start-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  {
    path: 'overview',
    loadChildren: () => import('./music-overview/music-overview.module').then(m => m.MusicOverviewModule)
  },
  { path: '**', component: StartPageComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
