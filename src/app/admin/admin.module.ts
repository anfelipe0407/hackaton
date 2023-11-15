import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { GestionClientesComponent } from './pages/gestion-clientes/gestion-clientes.component';
import { GestionAsesoresComponent } from './pages/gestion-asesores/gestion-asesores.component';
import { GestionProductosComponent } from './pages/gestion-productos/gestion-productos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { GestionCotizacionComponent } from './pages/gestion-cotizacion/gestion-cotizacion.component';

@NgModule({
  declarations: [
    GestionClientesComponent,
    GestionAsesoresComponent,
    GestionProductosComponent,
    AdminComponent,
    HomeComponent,
    GestionCotizacionComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
