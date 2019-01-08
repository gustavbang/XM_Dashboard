import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Recipe } from 'src/app/entities/Recipe';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

deliveryRecipes: Recipe[];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.updateView();
  }

  async updateView() {
    this.deliveryRecipes = deliveryRecipesGlobal;
    this.cd.detectChanges();
}

}

export var deliveryRecipesGlobal: Recipe[] = [];
