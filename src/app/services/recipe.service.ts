import { Recipe } from '../../app/entities/Recipe';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url;

  constructor(private http: Http) { 
    this.url = 'http://angular2api2.azurewebsites.net/api/internships'
  }

  getRecipes() {
    console.log();
    return this.http.get(this.url).pipe(map(res =>
      res.json()));
  }

  //create, update, delete
  createRecipe(recipe: Recipe) {
    return this.http.post(this.url, recipe);
  }

  updateRecipe(id, recipe: Recipe) {
    console.log(id);
    return this.http.put(this.url + "/" + id, 
    {
      "_id" : recipe._id,
      "title": recipe.title,
      "img": recipe.img,
      "ingredients": recipe.ingredients
    });
  }

  deleteRecipe(id) {
    return this.http.delete(this.url + "/" + id);
  }
}
