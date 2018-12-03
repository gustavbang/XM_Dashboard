import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RedditComponent } from './reddit/reddit.component';
import { BtcComponent } from './btc/btc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//material
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RedditComponent,
    BtcComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
