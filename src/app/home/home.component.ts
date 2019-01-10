import { Headline } from './../entities/Headline';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as HeadlineActions from '../actions/headline.actions';


interface AppState {
  headline: Headline;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headline: Observable<Headline>

  text: string;

  constructor(private store: Store<AppState>) {
    //access nrgx store
    this.headline = this.store.select('headline')
   }

   editText() {
     this.store.dispatch(new HeadlineActions.EditText(this.text))
   }

   upvoteHeadline() {
    this.store.dispatch(new HeadlineActions.Upvote())
  }

  downvoteHeadline() {
    this.store.dispatch(new HeadlineActions.Downvote())
  }

   resetHeadline() {
     this.store.dispatch(new HeadlineActions.Reset())
   }

  ngOnInit() {
  }

}