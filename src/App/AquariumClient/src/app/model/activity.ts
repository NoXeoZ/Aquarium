import {Pool} from "./pool";
import {Employee} from "./employee";


export class Activity {
  id : number;
  name :String;
  begin:Date;
  end:Date;
  ispublic:Boolean;
  workingemployees:Iterable<Employee>;
  poolactivity:Pool;
}
