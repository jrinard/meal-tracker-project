import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allFoods">All Foods</option>
    <option value=">500">More Then 500 Calories</option>
    <option value="<500">Less Then 500 Calories</option>
  </select>

    <ul> <!-- repeater DIRECTIVE -->
      <li *ngFor="let currentFood of childFoodList | Filter:filterByCalorie" >
      {{currentFood.name}}, {{currentFood.details}}, {{currentFood.calories}} - Eaten Today
      <button class="btn btn-xs" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
      </li>
    </ul>
    `
  })

  export class FoodListComponent {
    @Input() childFoodList: Food[];// Imported through input and used in *ngFor
    @Output() editButtonSender = new EventEmitter(); // Food/object gets passed up to parent via .emit

    editButtonHasBeenClicked(foodToEdit: Food): void {
      this.editButtonSender.emit(foodToEdit); // sending specific Food to the parent using emit
    }

    toggleDone(clickedFood: Food): void {
      clickedFood.ateToday = !clickedFood.ateToday; // Toggle boolean -> bool = !bool; -or- if bool is not initialized -> bool = !bool || true;
    }
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
