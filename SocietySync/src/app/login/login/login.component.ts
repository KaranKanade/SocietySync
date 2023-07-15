import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(){}

  login() {
    // You can implement your login logic here
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
  }
}
