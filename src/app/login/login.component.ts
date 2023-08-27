import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  agora = new Date();

   usuario : Usuario = new Usuario();
  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
}