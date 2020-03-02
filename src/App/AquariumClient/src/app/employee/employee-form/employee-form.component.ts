import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../employee/employee.service";
import {SectorService} from "../../sector/sector.service";
import {Sector} from "../../model/sector";
import {PoolService} from "../../pool/pool.service";
import {ActivityService} from "../../activity/activity.service";
import {Pool} from "../../model/pool";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;
  sectors: Sector[];
  pools: Pool[];

  ngOnInit(): void {
    this.sectorsService.findAll()
      .subscribe(sectors => {
        this.sectors = sectors as Sector[]
      })
    this.poolsService.findAll()
      .subscribe(pools => {
        this.pools = pools as Pool[]
      })
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private sectorsService: SectorService,
    private poolsService: PoolService,
    private activityService: ActivityService) {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.back());
  }

  back() {
    this.router.navigate(['/employees']).then(r=>console.log("create OK"));
  }
}
