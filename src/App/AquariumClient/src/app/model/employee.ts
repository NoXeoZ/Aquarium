import {Sector} from "./sector";
import {Activity} from "./activity";

export class Employee {
  id : number;
  firstname :String;
  lastname:String;
  address:String;
  socialsecuritynumber : number;
  birthdate:Date;
  workingsectors:Iterable<Sector>;
  poolschief:Iterable<Sector>;
  activities:Iterable<Activity>;
}
