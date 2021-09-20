package com.gisue.postcrud;

import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.gisue.postcrud.model.Employee;

@MappedTypes(Employee.class)
@MapperScan("com.gisue.postcrud.mapper")
@SpringBootApplication
public class PostcrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(PostcrudApplication.class, args);
	}

}
