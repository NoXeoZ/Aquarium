import {Animal} from "./animal";
import {Pool} from "./pool";

export class Specie {
  id:number;
  lifeSpan:number;
  name:string;
  animals:Iterable<Animal>;
  pool:Pool;
}
