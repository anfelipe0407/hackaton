import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-ver-cotizaciones',
  templateUrl: './ver-cotizaciones.component.html',
  styleUrls: ['./ver-cotizaciones.component.css'],
})
export class VerCotizacionesComponent {
  cotizaciones: any[] = [];
  productos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.getAllCotizaciones();
  }

  volverAHome() {
    this.router.navigate(['/cliente']);
  }

  getAllCotizaciones() {
    this.clienteService
      .getAllCotizaciones(this.authService.cliente_id)
      .subscribe((res) => {
        console.log('Cotizaciones');
        this.cotizaciones = res;
        console.log(res);
      });
  }
}
