import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../entities/Recipe';
import { RecipeService } from '../../services/recipe.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  createForm: FormGroup;
  editForm: FormGroup;
  recipesRaw: Recipe[];
  recipes: Recipe[];
  
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
    this.createForm = new FormGroup({
      title: new FormControl(),
      image: new FormControl(),
      ingredients: new FormControl()
    });
  }
  getRecipes() {
    this._recipeService.getRecipes().subscribe(response => {
      this.recipes = response;
    });
  }

  onCreateClick() {
    var recipe =  { 
    title: this.createForm.get('title').value,
    img: this.createForm.get('image').value,
    ingredients: [this.createForm.get('ingredients').value, "456"] };
    this._recipeService.createRecipe(recipe).subscribe(response => {
      console.log(response);
    });
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
}
