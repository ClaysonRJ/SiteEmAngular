import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
   UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    return false;
  }
}
