import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

//redux
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';


interface AppState {
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$: Observable<string>

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }


  englishMessage() {
    this.store.dispatch({type: 'ENGLISH'})
  }

  danishMessage() {
    this.store.dispatch({type: 'DANISH'})
  }

}

