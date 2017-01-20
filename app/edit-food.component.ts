import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h3>{{childSelectedFood.name}}</h3>
      <p>Ate Today {{childSelectedFood.ateToday}}</p>
      <h3>Edit Food</h3>
      <label>Enter Food Name:</label>
      <input [(ngModel)]="childSelectedFood.name">
      <input [(ngModel)]="childSelectedFood.details">
      <input [(ngModel)]="childSelectedFood.calories">
      <br>
      <button class="btn btn-xs" (click)="doneButtonClicked()">Close</button>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(): void {
    this.doneButtonClickedSender.emit();
  }
}
