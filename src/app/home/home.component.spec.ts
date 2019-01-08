import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { Language } from '../entities/Language';
import * as fromLanguage from '../reducers/language.reducer';
import * as fromActions from '../actions/language.actions';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

describe('LanguageReducer', () => {
    describe('undefined action', () => {
      it('should return the default state', () => {
        const defaultState = fromLanguage.defaultState;
        const action = {}
        const state = fromLanguage.languageReducer(undefined, action);
  
        expect(state).toBe(defaultState);
      });
    });
  });