import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  @Output () mostrarMenuEmitter = new EventEmitter<boolean>();



  constructor(private router: Router) { }
  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'clayson' && 
    usuario.senha === 'SouFoda'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/perfil']);      
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
  usuarioEstaAutenticado (){
    return this.usuarioAutenticado;
  }

}
