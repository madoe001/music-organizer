import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  declarations: [HeaderComponent, StartPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
