import { Food } from './../../entities/Food';
import { FilterRefrigerators } from './refrigerator.filter';
import { TestBed, async } from '@angular/core/testing';

describe('App: Buzy', () => {
       TestBed.configureTestingModule({
     declarations: [
       FilterRefrigerators
     ]
   });

   it('Valid data: Search "cheese" should give 1 result, feta cheese.', () => {
     // Arrange
    const food: Food[] = [{category: "meat", name: "turkey"}, {category: "dairy products", name: "feta cheese"}]
    const filter: FilterRefrigerators = new FilterRefrigerators();

    //Act
    const result = filter.transform(food, 'cheese');

    //Assert (expect)
    expect(result[0].name).toBe('feta cheese');
   })
 });

