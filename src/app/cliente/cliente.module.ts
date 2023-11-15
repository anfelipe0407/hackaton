import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { VerCotizacionesComponent } from './pages/ver-cotizaciones/ver-cotizaciones.component';

@NgModule({
  declarations: [
    ClienteComponent,
    HomeComponent,
    CotizarComponent,
    VerCotizacionesComponent,
  ],
  imports: [CommonModule, ClienteRoutingModule, ReactiveFormsModule],
})
export class ClienteModule {}
