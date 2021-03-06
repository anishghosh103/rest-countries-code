import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingScreenComponent
  ],
  exports: [
    CommonModule,
    LoadingScreenComponent
  ]
})
export class SharedModule { }
