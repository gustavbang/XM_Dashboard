import { Food } from './../../entities/Food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {
  searchTerm: string; 

  meat: Food[];
  vegetable: Food[];
  dairy: Food[];
  liquids: Food[];
  sauce: Food[];
  extra: Food[];


  constructor() { }

  ngOnInit() {
    this.meat = [{category: "meat", name: "Ham"},{category: "meat", name: "Chicken"},{category: "meat", name: "Sliced Beef"}];
    this.vegetable = [{category: "vegetable", name: "Cucumber"},{category: "vegetable", name: "Tomato"}];
    this.dairy = [{category: "dairy", name: "Fat Milk"}, {category: "dairy", name: "Mild Cheese"},{category: "dairy", name: "Feta Cheese"}];
    this.liquids = [{category: "liquids", name: "Coke"}, {category: "liquids", name: "Sprite"}, {category: "liquids", name: "Waiter"}];
    this.sauce = [{category: "sauce", name: "Salsa"}, {category: "sauce", name: "Mayo"}, {category: "sauce", name: "Ketchup"}, {category: "sauce", name: "Spicy Sauce"}, {category: "sauce", name: "Barbeque"}]
    this.extra = [{category: "extra", name: "Protein bar"}, {category: "extra", name: "Kinder Milkslice"}, {category: "extra", name: "Oreo"}];
  }
}
