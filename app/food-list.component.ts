import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="col-md-4">
  <div class="dark-well">
    <select class="form-control"(change)="onChange($event.target.value)">
      <option value="allFoods">All Foods</option>
      <option value=">500"> 500+ Calories</option>
      <option value="<500"> -500 Calories</option>
    </select>
  </div>
  </div>
  <div class="col-md-8">
    <div class="dark-well">
      <li class="light-well" *ngFor="let currentFood of childFoodList | Filter:filterByCalorie" >
      <h2 class="foodName">{{currentFood.name}}</h2>
      <h4 class="foodDetails">{{currentFood.details}}</h4>
      <h4 class="foodCalories">Calories: {{currentFood.calories}}</h4><hr>
      <button class="btn btn-dark" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
      </li>
  </div>
    </div>
    `
  })

  export class FoodListComponent {
    @Input() childFoodList: Food[];
    @Output() editButtonSender = new EventEmitter();

    editButtonHasBeenClicked(foodToEdit: Food): void {
      this.editButtonSender.emit(foodToEdit);
    }

    filterByCalorie: string = "allfood";

    onChange(optionFromMenu): void {
      this.filterByCalorie = optionFromMenu;
    }

  }
