import { AppComponent } from './../app.component';
import { LoginComponent } from './../login/login.component';
import { WeatherComponent } from './../weather/weather.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'home', component: HomeComponent},
  { path: '', component: LoginComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}