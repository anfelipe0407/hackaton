import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css'],
})
export class GestionProductosComponent {
  formularioCrear: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    metros_por_paquete: ['', Validators.required],
    precio: ['', Validators.required],
  });

  productos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllProductos();
  }

  volverAHome() {
    this.router.navigate(['/admin']);
  }

  getAllProductos() {
    this.authService.getAllProductos().subscribe((res) => {
      console.log('ASESORES');
      this.productos = res;
      console.log(res);
    });
  }

  crearCliente() {
    const crearProducto = {
      nombre: this.formularioCrear.get('nombre')?.value,
      metros_por_paquete: this.formularioCrear.get('metros_por_paquete')?.value,
      precio: this.formularioCrear.get('precio')?.value,
    };

    this.authService.crearProducto(crearProducto).subscribe((res: any) => {
      console.log(res);

      if (!res.error) {
        this.getAllProductos();
      }
    });
  }
}
