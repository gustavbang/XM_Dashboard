import { WeatherServiceService } from './weather-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BtcComponent } from './btc/btc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//material

import {MatCardModule} from '@angular/material/card';
import { HttpModule } from '@angular/http';
import { RecipesComponent } from './recipes/recipes.component';

//Redux

import {StoreModule} from '@ngrx/store';
import {languageReducer} from './reducers/language.reducer'
import {headlineReducer} from './reducers/headline.reducer'


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BtcComponent,
    LoginComponent,
    HomeComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
    MatCardModule,
    HttpModule,
    StoreModule.forRoot({
      language: languageReducer,
      headline: headlineReducer
    })
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
