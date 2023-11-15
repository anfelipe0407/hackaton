import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css'],
})
export class GestionClientesComponent implements OnInit {
  formularioCrear: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    nit: ['', Validators.required],
    razon_social: ['', Validators.required],
    direccion: ['', Validators.required],
    descuento: ['0', Validators.required],
    estado: ['', Validators.required],
  });

  clientes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllClientes();
  }

  volverAHome() {
    this.router.navigate(['/admin']);
  }

  getAllClientes() {
    this.authService.getAllClientes().subscribe((res) => {
      console.log('CLIENTES');
      this.clientes = res;
      console.log(res);
    });
  }

  crearCliente() {
    const crearCliente = {
      nombre: this.formularioCrear.get('nombre')?.value,
      nit: this.formularioCrear.get('nit')?.value,
      razon_social: this.formularioCrear.get('razon_social')?.value,
      direccion: this.formularioCrear.get('direccion')?.value,
      descuento: this.formularioCrear.get('descuento')?.value,
      estado: this.formularioCrear.get('estado')?.value,
    };

    this.authService.crearCliente(crearCliente).subscribe((res: any) => {
      console.log(res);

      if (!res.error) {
        this.getAllClientes();
      }
    });
  }
}
