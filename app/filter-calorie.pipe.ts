import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';


@Pipe({
  name: "Filter",
  pure: false
})

export class FilterByCaloriePipe implements PipeTransform {
  transform(input: Food[], selectedValue) {
    let output: Food[] = [];
    if (selectedValue === ">500") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedValue === "<500") {
      for (let i = 0; i < input.length; i++) {
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
