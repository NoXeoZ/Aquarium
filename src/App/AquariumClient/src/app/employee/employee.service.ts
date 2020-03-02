import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Specie} from "../model/specie";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private employeeUrl: string;

  constructor(private http: HttpClient) {
    this.employeeUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl+"employees");
  }

  public save(employee: Employee) {
    return this.http.post<Employee>(this.employeeUrl+"employee", employee);
  }

  public delete(id:number){
    return this.http.delete<Employee>(this.employeeUrl+
      'employee/'+id)
  }
}
