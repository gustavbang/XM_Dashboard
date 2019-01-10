import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { RefrigeratorComponent } from './../groceries/refrigerator/refrigerator.component';
import { RecipeComponent } from './../groceries/recipe/recipe.component';
import { DeliveryComponent } from './../groceries/delivery/delivery.component';
import { GroceriesComponent } from './../groceries/groceries.component';
import { AppComponent } from './../app.component';
import { LoginComponent } from './../login/login.component';
import { WeatherComponent } from './../weather/weather.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},


  //pages
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard]},
  { path: 'groceries', component: GroceriesComponent, canActivate: [AuthGuard],
    children: [
      {path: 'delivery', component: DeliveryComponent},
      {path: 'recipe', component: RecipeComponent},
      {path: 'refrigerator', component: RefrigeratorComponent},
    ]
},
{ path: '**', component: PageNotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}