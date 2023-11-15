import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    clave: ['', Validators.required],
    tipo: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    const loginInfo = {
      usuario: this.formularioLogin.get('usuario')?.value,
      clave: this.formularioLogin.get('clave')?.value,
      tipo: this.formularioLogin.get('tipo')?.value,
    };

    this.authService.login(loginInfo).subscribe((res) => {
      console.log(res);

      if (res.login) {
        console.log('LOGIN CORRECTO');
        console.log(res);

        console.log('INFO USUARIO');

        this.authService.userInfo = res.login;
        this.authService.cliente_id = res.cliente_id;
        console.log(this.authService.userInfo);

        switch (res.login.tipo) {
          case 'administrador':
            this.router.navigate(['/admin']);
            break;
          case 'asesor':
            this.router.navigate(['/asesor']);
            break;
          case 'cliente':
            this.router.navigate(['/cliente']);
            break;

          default:
            // TODO: alerta de error de login. ROl no encontrado
            break;
        }
      }

      if (res.error) {
        console.log('ERROR DE INICIO DE SESION');
      }
    });
  }
}
