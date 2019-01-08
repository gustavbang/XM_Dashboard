import { Food } from './../../entities/Food';
import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterFood'})
export class FilterRefrigerators implements PipeTransform {

    transform(food: Food[], searchTerm: string): Food[] {
        if (!food || !searchTerm) {
            return food;
        }

        return food.filter(food =>
        food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}