
//class declaration is our MODEL which holds our data // CONSTRUCTOR
export class Food {
  public ateToday: boolean = false;
  constructor(public name: string, public description: string, public calories: number) { }

}
