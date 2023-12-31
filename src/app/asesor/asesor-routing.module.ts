import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './pages/asesor/asesor.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AsesorComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
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
export class AsesorRoutingModule {}
