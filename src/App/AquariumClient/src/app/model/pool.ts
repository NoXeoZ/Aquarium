import { Sector } from "./sector";

export class Pool {
  id : number;
  sector :Sector;
  name :String;
  clean :Boolean;
  volume : number;
  populationmax : number;
}
