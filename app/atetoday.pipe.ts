import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';


@Pipe({ //Decorator
  name: "atetoday",
  pure: false //tells Angular to check if output has changed more often, causing it to update as soon as we change something about a Food, not only when the menu option changes.
})

export class AteTodayPipe implements PipeTransform { //CompletenessPipe class must implement all properties or methods outlined in Angular's PipeTransform interface.
  transform(input: Food[], ateTODAY) { // Pipetransform must contain Tranform //array of objects to be transformed (or filtered
    let output: Food[] = [];
    if (ateTODAY === "foodsEatenToday") {
      for (let i = 0; i < input.length; i++) { // filtering incomplete foods and pushing to output
        if (input[i].ateToday === true) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
