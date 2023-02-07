import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  senha = '';
  error_mensagem = '';

  usuarioForm = this.fb.group({
    usuario: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  });

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) { }

  onLogin(): void {
    this.error_mensagem = '';
    if (this.usuarioForm.valid) {
      if (this.loginService.login(this.usuario, this.senha)) {
        this.router.navigate(['/']);
      }
      else {
        this.error_mensagem = 'Login ou senha inválidos.';
      }
    }

  }
}
