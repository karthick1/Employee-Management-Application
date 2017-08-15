package com.demo.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.employee.dao.model.Employee;
import com.demo.employee.dao.repo.EmployeeRepo;

@Service
public class EmployeeImpl {

	@Autowired
	EmployeeRepo employeeRepo;

	/**
	 * Method used to fetch complete employee list
	 * @author Karthick
	 * @return employee list
	 */
	public List<Employee> getEmployeeList() {
		return employeeRepo.findAll();
	}

	/**
	 * This method used to save employee data
	 * @author Karthick
	 * @param employee
	 */
	public void saveEmployee(Employee employee) {
		if (employee != null) {
			employee.setActive(true);
			employeeRepo.save(employee);
		}
	}

	/**
	 * To delete employee by employee id
	 * @author Karthick
	 * @param employeeId
	 */
	public void deleteEmployee(Integer employeeId) {
		if (employeeId != null) {
			employeeRepo.delete(employeeId);
		}
	}

}
