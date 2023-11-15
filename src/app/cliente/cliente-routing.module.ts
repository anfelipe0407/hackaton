import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { VerCotizacionesComponent } from './pages/ver-cotizaciones/ver-cotizaciones.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cotizaciones',
        component: VerCotizacionesComponent,
      },
      {
        path: 'cotizar',
        component: CotizarComponent,
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
export class ClienteRoutingModule {}
