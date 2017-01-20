import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
    <ul> <!-- repeater DIRECTIVE -->
      <li *ngFor="let currentFood of childFoodList" (click)="isDone(currentFood)" >
      {{currentFood.name}}, {{currentFood.details}}, {{currentFood.calories}}
      <input *ngIf="currentFood.ateToday === true" type="checkbox" checked (click)="toggleDone(currentFood)"/>
      <input *ngIf="currentFood.ateToday === false" type="checkbox" (click)="toggleDone(currentFood)"/>
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

    // filterByCompleteness: string = "incompleteTasks";

    // onChange(optionFromMenu): void {
    //   this.filterByCompleteness = optionFromMenu;
    // }

  }