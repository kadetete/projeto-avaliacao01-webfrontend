import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  senha = '';
  error_mensagem = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin(): void {
    this.error_mensagem = '';
    if (this.loginService.login(this.usuario, this.senha)) {
      this.router.navigate(['/']);
    }
    else {
      this.error_mensagem = 'Login ou senha inválidos.';
    }
  }
}
