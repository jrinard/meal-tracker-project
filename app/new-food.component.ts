import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>New Food</h3>
    <div>
      <label>Enter Food Description:</label>
      <input #newName>
      <input #newDetails>
      <input #newCalories>
    </div>
    <div>

      <button class="btn"(click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value='';">Add</button>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter(); //sends newFoodSender data up to root comp

  submitForm(name: string, details: string, calories: number): void {
    let newFoodToAdd: Food = new Food(name, details, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
