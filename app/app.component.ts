//ROOT COMPONENT
import { Component } from '@angular/core';
import { Food } from './food.model';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>

    <food-list [childFoodList]="masterFoodList" (editButtonSender)="editFood($event)"></food-list><!-- (editButtonSender)Transfer from child --> <!-- [childTaskList] Transfer from module down -->
    <hr>

  </div>
  `
})

//Part 2 CLASS DEFINITION
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1; //TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the "this" keyword.
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterFoodList: Food[] = [
    new Food('Hamburger', '1/4 beef Patty Lettuce and Cheese', 645),
    new Food('Fries', 'Ate half of them', 450),
    new Food('ChickFila Nuggets', 'Delicious Nuggets', 540)
  ]

}
