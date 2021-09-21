package com.gisue.postcrud.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gisue.postcrud.mapper.EmployeeMapper;
import com.gisue.postcrud.model.Employee;
import com.gisue.postcrud.service.EmployeeService;

@RestController
public class HomeController {

	@Autowired
    private EmployeeService employeeService;
	
	Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(method=RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public String put(@Valid @RequestBody Employee emp) {
    	logger.info("add Employee");
    	if(employeeService.save(emp)) {
    		return "Added";
    	} else {
    		return "Failed";
    	}
	}

	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public Employee get(@PathVariable("id") int id) {
    	logger.info("fetching one");
        return employeeService.get(id);
	}

	@RequestMapping(value="/{id}", method=RequestMethod.POST)
	public String post(@PathVariable("id") int id, @RequestBody Employee emp) {
    	logger.info("edit Employee");
    	Employee e = new Employee();
    	if(employeeService.update(1, emp)) {
    		return "Edited";
    	} else {
    		return "Failed";
    	}
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public String delete(@PathVariable("id") int id){
    	logger.info("delete Employee");
    	if(employeeService.delete(id)) {
    		return "Deleted";
    	} else {
    		return "Failed";
    	}
	}
/*
    @GetMapping("/add")
    public String add() {
    }
*/
    @GetMapping("/edit")
    public String edit() {
    	logger.info("edit Employee");
    	Employee e = new Employee();
    	e.setFirstName("kshama");
    	e.setLastName("sena");
    	if(employeeService.update(1, e)) {
    		return "Edited";
    	} else {
    		return "Failed";
    	}
    }

    @GetMapping("/delete")
    public String delete() {
    	logger.info("delete Employee");
    	if(employeeService.delete(2)) {
    		return "Deleted";
    	} else {
    		return "Failed";
    	}
    }

    @GetMapping("/list")
    public List<Employee> getAll() {
    	logger.info("fetching list");
        return employeeService.getAll();
    }
    
    public String home() {
    	String str = "Hello World!";
    	logger.info("test result : " + str);
        return str;
    }
    
    public String test() {
    	String str = employeeService.test();
    	logger.info("Mockito result : " + str);
        return str;
    }
}