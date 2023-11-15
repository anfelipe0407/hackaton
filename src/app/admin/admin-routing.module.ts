import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { GestionAsesoresComponent } from './pages/gestion-asesores/gestion-asesores.component';
import { GestionClientesComponent } from './pages/gestion-clientes/gestion-clientes.component';
import { GestionProductosComponent } from './pages/gestion-productos/gestion-productos.component';
import { GestionCotizacionComponent } from './pages/gestion-cotizacion/gestion-cotizacion.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'asesores',
        component: GestionAsesoresComponent,
      },
      {
        path: 'clientes',
        component: GestionClientesComponent,
      },
      {
        path: 'productos',
        component: GestionProductosComponent,
      },
      {
        path: 'cotizaciones',
        component: GestionCotizacionComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
