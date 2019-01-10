import { FormControl } from '@angular/forms';
import { Food } from './../../entities/Food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {
  searchTerm: string; 
  i: number;
  j: number;

  meat: Food[];
  vegetable: Food[];
  dairy: Food[];
  liquids: Food[];
  sauce: Food[];
  extra: Food[];

  overallArray: Food[][];

  constructor() { }

  ngOnInit() {
    this.meat = [{category: "meat", name: "Ham"},{category: "meat", name: "Chicken"},{category: "meat", name: "Sliced Beef"}];
    this.vegetable = [{category: "vegetable", name: "Cucumber"},{category: "vegetable", name: "Tomato"}];
    this.dairy = [{category: "dairy", name: "Fat Milk"}, {category: "dairy", name: "Mild Cheese"},{category: "dairy", name: "Feta Cheese"}];
    this.liquids = [{category: "liquids", name: "Coke"}, {category: "liquids", name: "Sprite"}, {category: "liquids", name: "Waiter"}];
    this.sauce = [{category: "sauce", name: "Salsa"}, {category: "sauce", name: "Mayo"}, {category: "sauce", name: "Ketchup"}, {category: "sauce", name: "Spicy Sauce"}, {category: "sauce", name: "Barbeque"}]
    this.extra = [{category: "extra", name: "Protein bar"}, {category: "extra", name: "Kinder Milkslice"}, {category: "extra", name: "Oreo"}];
    this.overallArray = [this.meat, this.vegetable, this.dairy, this.liquids, this.sauce, this.extra];
  }

  addItem(category, name) {
      for(this.i = 0;this.i<this.overallArray.length;this.i++) {
        if (category == this.overallArray[this.i][0].category) {
          this.overallArray[this.i].push({category: category, name: name})
        }
      }
  }

  removeItem(category, name) {
    for(this.i = 0;this.i<this.overallArray.length;this.i++) {
      for(this.j = 0;this.j<this.overallArray[this.i].length;this.j++) {
        if (name == this.overallArray[this.i][this.j].name) {
          delete this.overallArray[this.i][this.j];
          console.log("Success");
        }
      }
    }
  }
}