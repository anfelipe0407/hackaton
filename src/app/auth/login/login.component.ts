import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const loginInfo: LoginInfo = {
      usuario: this.loginForm.get('usuario')?.value,
      clave: this.loginForm.get('clave')?.value,
      id_rol: this.loginForm.get('rol')?.value,
    };

    this.authService.login(loginInfo).subscribe((res) => {
      console.log(res);

      if (res.login) {
        console.log('LOGIN CORRECTO');
        console.log(res);

        this.authService.userAuthInfo = {
          rol_id: loginInfo.id_rol,
          rol: rolNombre,
        };

        // * Se crea la sesion
        this.authService
          .crearSesionUsuario({
            id_usuario: this.authService.userIdRequest,
          })
          .subscribe((res) => {
            switch (this.authService.userAuthInfo.rol.toLowerCase()) {
              case 'estudiante':
                this.router.navigate(['/student']);
                break;
              case 'docente':
                this.router.navigate(['/docente']);
                break;
              case 'administrativo':
                this.router.navigate(['/admin']);
                break;

              default:
                // TODO: alerta de error de login. ROl no encontrado
                break;
            }
          });
      }
    });
  }
}
