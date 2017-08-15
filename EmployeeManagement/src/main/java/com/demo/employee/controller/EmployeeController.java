package com.demo.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.employee.dao.model.Employee;
import com.demo.employee.service.EmployeeImpl;

@RestController
@RequestMapping(value = "/employee/")
public class EmployeeController {

	@Autowired
	EmployeeImpl employeeImpl;

	/**
	 * Controller used to get employee list To get employee list
	 * 
	 * @author Karthick
	 * @return
	 */
	@RequestMapping(value = "list", method = RequestMethod.GET, produces = "application/json")
	public List<Employee> getEmployeeList() {
		return employeeImpl.getEmployeeList();
	}

	/**
	 * Controller used to save employee details To save/Update employee
	 * @author Karthick
	 * @param employee
	 */
	@RequestMapping(value = "save", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public void postEmployee(@RequestBody Employee employee) {
		employeeImpl.saveEmployee(employee);
		return;
	}

	/**
	 * Controller used to delete employee details
	 * 
	 * @author Karthick
	 * @param employeeId
	 * 
	 */
	@RequestMapping(value = "delete", method = RequestMethod.DELETE)
	public void deleteEmployee(@RequestHeader Integer employeeId) {
		employeeImpl.deleteEmployee(employeeId);
		return;
	}

}