import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  login(): Observable<boolean> {
    // IRL: Call a ws, authenticate user, save user info or token in auth.service.
    
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}