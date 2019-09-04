import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavigationComponent } from './site-navigation/site-navigation.component';
import { SiteNavigationListComponent } from './site-navigation-list/site-navigation-list.component';
import { SiteNavigationListItemComponent } from './site-navigation-list-item/site-navigation-list-item.component';

@NgModule({
  declarations: [
    SiteNavigationComponent,
    SiteNavigationListComponent,
    SiteNavigationListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteNavigationComponent

  ],
  entryComponents: [
  ]
})
export class SiteNavigationModule { }
