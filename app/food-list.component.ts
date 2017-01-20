import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `

  <div class="col-md-3">
  <div class="dark-well">
    <select class="form-control"(change)="onChange($event.target.value)">
      <option value="allFoods">All Foods</option>
      <option value=">500">More Then 500 Calories</option>
      <option value="<500">Less Then 500 Calories</option>
    </select>
  </div>
  </div>

  <div class="col-md-9">
    <div class="dark-well">
      <li class="light-well" *ngFor="let currentFood of childFoodList | Filter:filterByCalorie" >
      <h2 class="foodName">{{currentFood.name}}</h2>
      <h4 class="foodDetails">{{currentFood.details}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="foodCalories">Calories: {{currentFood.calories}}</span></h4><hr>
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

    // toggleDone(clickedFood: Food): void {
    //   clickedFood.calories = !clickedFood.calories; // Toggle boolean -> bool = !bool; -or- if bool is not initialized -> bool = !bool || true;
    // }
    //
    // priorityColor(currentFood: Food): string {
    //   if (currentFood.calories === 1) {
    //     return "bg-danger";
    //   } else if (currentFood.calories === 2) {
    //     return "bg-warning";
    //   } else {
    //     return "bg-info";
    //   }
    // }

    filterByCalorie: string = "allfood";

    onChange(optionFromMenu): void {
      this.filterByCalorie = optionFromMenu;
    }

  }
