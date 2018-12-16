import { RecipesComponent } from './../recipes/recipes.component';
import { BtcComponent } from './../btc/btc.component';
import { AppComponent } from './../app.component';
import { LoginComponent } from './../login/login.component';
import { WeatherComponent } from './../weather/weather.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: LoginComponent},

  //pages
  { path: 'weather', component: WeatherComponent},
  { path: 'btc', component: BtcComponent, canActivate: [AuthGuard]},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}