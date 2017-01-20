//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
<div class="container-fluid">
<div class="row">
<div class="main">
<div class="nav">
  <span class="logo">Meal Tracker</span>&nbsp;&nbsp;&nbsp;
  <span class="date">{{month}}/{{day}}/{{year}}</span>
</div>
<div class="header">

</div>
    <hr>
<div class="list">
    <food-list [childFoodList]="masterFoodList" (editButtonSender)="editFood($event)"></food-list>
</div>
    <hr>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
    <new-food (newFoodSender)="addFood($event)"></new-food>
  </div>
  </div> <!-- Div End -->
  </div> <!--Row End -->
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterFoodList: Food[] = [
    new Food('Hamburger', '1/4 beef Patty Lettuce and Cheese', 645),
    new Food('Fries', 'Ate half of them', 450),
    new Food('ChickFila Nuggets', 'Delicious Nuggets', 540)
  ];

  selectedFood: Food = null;

  editFood(clickedFood: Food): void { //called above
    this.selectedFood = clickedFood;
  }

  finishedEditing(): void { //called above
    this.selectedFood = null;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }


}
