import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorComponent } from './pages/asesor/asesor.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AsesorComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
