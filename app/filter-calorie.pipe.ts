import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';


@Pipe({ //Decorator
  name: "FILTER",
  pure: false //tells Angular to check if output has changed more often, causing it to update as soon as we change something about a Food, not only when the menu option changes.
})

export class FilterByCaloriePipe implements PipeTransform { //CompletenessPipe class must implement all properties or methods outlined in Angular's PipeTransform interface.
  transform(input: Food[], CALORIES) { // Pipetransform must contain Tranform //array of objects to be transformed (or filtered
    let output: Food[] = [];

    if (CALORIES === ">500") {
      for (let i = 0; i < input.length; i++) { // filtering incomplete foods and pushing to output
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (CALORIES === "<500") {
      for (let i = 0; i < input.length; i++) { // filtering incomplete foods and pushing to output
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
