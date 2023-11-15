import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-gestion-asesores',
  templateUrl: './gestion-asesores.component.html',
  styleUrls: ['./gestion-asesores.component.css'],
})
export class GestionAsesoresComponent {
  formularioCrear: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    num_identificacion: ['', Validators.required],
  });

  asesores: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllAsesores();
  }

  volverAHome() {
    this.router.navigate(['/admin']);
  }

  getAllAsesores() {
    this.authService.getAllAsesores().subscribe((res) => {
      console.log('ASESORES');
      this.asesores = res;
      console.log(res);
    });
  }

  crearCliente() {
    const crearAsesor = {
      nombre: this.formularioCrear.get('nombre')?.value,
      num_identificacion: this.formularioCrear.get('num_identificacion')?.value,
      tipo: this.formularioCrear.get('tipo')?.value,
    };

    this.authService.crearAsesor(crearAsesor).subscribe((res: any) => {
      console.log(res);

      if (!res.error) {
        this.getAllAsesores();
      }
    });
  }
}
