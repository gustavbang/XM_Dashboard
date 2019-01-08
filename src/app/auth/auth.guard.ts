import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export let URL: string = "";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    URL = state.url;
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isLoggedIn) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
