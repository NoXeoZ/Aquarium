import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { Specie } from '../../model/specie';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }

  onDeleteEmployee(id: number) {
    this.employeeService.delete(id).subscribe(response => {
      console.log("deleted OK");
      this.ngOnInit();
    })
  }
}
