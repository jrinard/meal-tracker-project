import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <hr>
      <h3>Edit {{childSelectedFood.name}}</h3>
      <div class="form-group">
        <input class="form-control" [(ngModel)]="childSelectedFood.name">
      </div>
      <div class="form-group">
        <input class="form-control" [(ngModel)]="childSelectedFood.details">
      </div>
      <div class="form-group">
        <input class="form-control" [(ngModel)]="childSelectedFood.calories">
      </div>
        <button class="btn" (click)="doneButtonClicked()">Close</button>
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
