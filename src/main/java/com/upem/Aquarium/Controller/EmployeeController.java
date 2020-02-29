package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Employee;
import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {
    private EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/employees")
    public Iterable<Employee> getEmployees() {
        return (Iterable<Employee>) employeeRepository.findAll();    }

    @PostMapping("/employee")
    public void addEmployee(@RequestBody Employee employee){
        employeeRepository.save(employee);
    }

    @DeleteMapping("/employee/{id}")
    public void delete(@PathVariable Long id) { employeeRepository.deleteById(id);  }
}
