import { Recipe } from './../../../entities/Recipe';
import { RecipeService } from './../../../recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeEditClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onDeleteClick() {
  }

  onEditClick() {
  }

}
