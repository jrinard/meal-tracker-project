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
        <div class="col-md-8">
          <food-list [childFoodList]="masterFoodList" (editButtonSender)="editFood($event)"></food-list>
        </div> <!-- col end-->
        <div class="col-md-4">
          <div class="new-form">
            <new-food (newFoodSender)="addFood($event)"></new-food>
            <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
          </div> <!-- new-form end-->
        </div> <!-- col end-->
      </div> <!-- main end-->
    </div> <!-- div End -->
    <div class="footer">© Copyright 2017 Joshua Rinard
    </div>
  </div> <!--row End -->
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

  editFood(clickedFood: Food): void {
    this.selectedFood = clickedFood;
  }

  finishedEditing(): void {
    this.selectedFood = null;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }


}
