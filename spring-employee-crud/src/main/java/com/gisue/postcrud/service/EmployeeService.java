package com.gisue.postcrud.service;

import com.gisue.postcrud.mapper.EmployeeMapper;
import com.gisue.postcrud.model.Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeMapper employeeMapper;
	
	public String test() {
		return "Hello World!";
	}
	
	public boolean save(Employee emp) {
		employeeMapper.insert(emp);
		return true;
	}
	
	public boolean update(int i, Employee emp) {
		emp.setId(i);
		employeeMapper.update(emp);
		return true;
	}
	
	public boolean delete(int i) {
		employeeMapper.delete(i);
		return true;
	}
	
	public Employee get(int i) {
		return employeeMapper.findById(i);
	}
	
	public List<Employee> getAll() {
		return employeeMapper.findAll();
	}
}