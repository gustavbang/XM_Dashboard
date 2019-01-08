import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BtcComponent } from './btc/btc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { GroceriesComponent } from './groceries/groceries.component';
import { RefrigeratorComponent } from './groceries/refrigerator/refrigerator.component';
import { RecipeComponent } from './groceries/recipe/recipe.component';
import { DeliveryComponent } from './groceries/delivery/delivery.component';
import { DisplayRecipeComponent } from './groceries/recipe/display-recipe/display-recipe.component'

//filter pipes
import { FilterRefrigerators } from './groceries/refrigerator/refrigerator.filter';

//material

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { HttpModule } from '@angular/http';

//Redux

import {StoreModule} from '@ngrx/store';
import {languageReducer} from './reducers/language.reducer'
import {headlineReducer} from './reducers/headline.reducer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BtcComponent,
    LoginComponent,
    HomeComponent,
    GroceriesComponent,
    RefrigeratorComponent,
    RecipeComponent,
    DeliveryComponent,
    DisplayRecipeComponent,
    FilterRefrigerators,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule, MatButtonModule,
    HttpModule,
    StoreModule.forRoot({
      language: languageReducer,
      headline: headlineReducer
    })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }