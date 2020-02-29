package com.upem.Aquarium.Repository;

import com.upem.Aquarium.Model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee,Long> {
}
