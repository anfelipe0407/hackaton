import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css'],
})
export class CotizarComponent {
  formularioCantidad: FormGroup = this.fb.group({
    cantidad: ['', Validators.required],
  });

  productos: any[] = [];
  carrito: any[] = [];
  precio_total: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.getAllProductos();
  }

  volverAHome() {
    this.router.navigate(['/cliente']);
  }

  getAllProductos() {
    this.authService.getAllProductos().subscribe((res) => {
      console.log('Productos');
      this.productos = res;
      console.log(res);
    });
  }

  agregarACarrito(producto: any) {
    let cantidad = this.formularioCantidad.get('cantidad')?.value;

    this.carrito.push({
      ...producto,
      cantidad,
    });

    this.precio_total += producto.precio * cantidad;

    this.formularioCantidad.reset();
  }

  // Swal.fire({
  //   title: "Good job!",
  //   text: "You clicked the button!",
  //   icon: "success"
  // });

  crearCotizacion() {
    console.log('CARRITO');
    console.log(this.carrito);

    this.clienteService
      .crearCotizacion({
        id_cliente: this.authService.cliente_id,
        carrito: this.carrito,
      })
      .subscribe((res: any) => {
        console.log(res);
        this.carrito = [];
      });
  }
}
