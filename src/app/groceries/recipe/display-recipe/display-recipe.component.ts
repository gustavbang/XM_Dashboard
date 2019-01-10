import { deliveryRecipesGlobal } from '../../delivery/delivery.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from './../../../entities/Recipe';
import { RecipeService } from '../../../services/recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {
  editForm: FormGroup;

  @Input() recipe: Recipe;
  lasttry: string;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      title: new FormControl(),
      image: new FormControl(),
      ingredients: new FormControl()
    })
  }

  onDeleteClick(recipe: Recipe) {
    console.log(recipe._id);
    this._recipeService.deleteRecipe(recipe._id).subscribe(() => console.log("user with id " + recipe._id + " is deleted"));
  }

  onEditClick() {
    var updatedRecipe =  { 
      title: this.editForm.get('title').value,
      img: this.editForm.get('image').value,
      ingredients: [this.editForm.get('ingredients').value] };
      console.log(this.lasttry);
      this._recipeService.updateRecipe(this.recipe._id, updatedRecipe).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
        },
        error => {
            console.log("Rrror", error);
        }
    );  
  } 
  
  addToDelivery(recipe: Recipe) {
    deliveryRecipesGlobal.push(recipe);
    console.log(deliveryRecipesGlobal);
  }


  openEditForm(recipe: Recipe) {
    this.lasttry = recipe.title;
    document.getElementById("myEditForm").style.display = "block";
  }

  closeEditForm() {
    document.getElementById("myEditForm").style.display = "none";
  }
}
