import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    // Lógica de autenticação (pode ser um serviço HTTP para verificar credenciais, por exemplo)
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Adicione sua lógica de autenticação aqui
  }
}
