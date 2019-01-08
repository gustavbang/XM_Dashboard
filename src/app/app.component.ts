import { Language } from './entities/Language';
import { Component, OnInit } from '@angular/core';
import * as LanguageActions from './actions/language.actions';

//redux
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';


interface AppState {
  language: Language;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: Observable<Language>

  constructor(private store: Store<AppState>) {
    this.language = this.store.select('language')
  }


  englishMessage() {
    this.store.dispatch(new LanguageActions.English())
  }

  danishMessage() {
    this.store.dispatch(new LanguageActions.Danish())
  }

}

