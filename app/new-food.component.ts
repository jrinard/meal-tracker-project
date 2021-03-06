import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>Enter New Food</h3>
    <div class="form-group">
      <input class="form-control" required placeholder="Name" #newName>
    </div>
    <div class="form-group">
      <input class="form-control" required placeholder="Details" #newDetails>
    </div>
    <div class="form-group">
      <input class="form-control" required placeholder="Calories" #newCalories>
    </div>
    <div>
      <button class="btn"(click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value='';">Add</button>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number): void {
    let newFoodToAdd: Food = new Food(name, details, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
