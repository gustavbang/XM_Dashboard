import { deliveryRecipesGlobal } from './../delivery/delivery.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../entities/Recipe';
import { RecipeService } from '../../recipe.service';
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

  temporaryRecipe: Recipe;
  
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
    this.createForm = new FormGroup({
      title: new FormControl(),
      image: new FormControl(),
      ingredients: new FormControl()
    });
    this.editForm = new FormGroup({
      title: new FormControl(),
      image: new FormControl(),
      ingredients: new FormControl()
    })
  }

  addToDelivery(recipe: Recipe) {
    deliveryRecipesGlobal.push(recipe);
    console.log(deliveryRecipesGlobal);
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

  onEditClick() {
    console.log(this.temporaryRecipe._id);
    var updatedRecipe =  { 
      title: this.editForm.get('title').value,
      img: this.editForm.get('image').value,
      ingredients: [this.editForm.get('ingredients').value, "456"] };
      this._recipeService.updateRecipe(this.temporaryRecipe._id, updatedRecipe).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
        },
        error => {
            console.log("Rrror", error);
        }
    );  
  }

  onDeleteClick(recipe: Recipe) {
    console.log(recipe._id);
    this._recipeService.deleteRecipe(recipe._id).subscribe(() => console.log("user with id " + recipe._id + " is deleted"));
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  openEditForm(recipe: Recipe) {
    this.temporaryRecipe = recipe;
    document.getElementById("myEditForm").style.display = "block";
  }

  closeEditForm() {
    document.getElementById("myEditForm").style.display = "none";
  }
}
