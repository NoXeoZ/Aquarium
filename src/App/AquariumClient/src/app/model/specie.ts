import {Animal} from "./animal";

export class Specie {
  id:number;
  lifeSpan:number;
  name:string;
  animals:Iterable<Animal>;
}
