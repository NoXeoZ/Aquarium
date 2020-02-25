import { Specie } from "./specie";

export class Animal {
  id : number;
  specie :Specie;
  name :String;
  genre:String;
  arriving:Date;
  departure:Date; // optional
  marks:String; // optional
}
