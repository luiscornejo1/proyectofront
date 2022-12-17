import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiciologinService } from '../services/serviciologin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private servicioLoginService: ServiciologinService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.isLogin();
  }
  
  isLogin(): any {
    if( this.servicioLoginService.isLoggedIn() ) {
      return true;
    }
    this.router.navigateByUrl('/dashboard/nuevo-historial');
  }
}
