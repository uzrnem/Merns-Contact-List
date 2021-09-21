
package com.gisue.postcrud.mapper;

import com.gisue.postcrud.model.Employee;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface EmployeeMapper {

    @Results(value = {
            @Result(property = "firstName", column = "first_name"),
            @Result(property = "lastName", column = "last_name")
    })
    @Select("select * from employee")
    List<Employee> findAll();

    @Results(value = {
            @Result(property = "firstName", column = "first_name"),
            @Result(property = "lastName", column = "last_name")
    })
    @Select("select * from employee where id = #{id}")
    Employee findById(int i);

    @Insert("insert into employee(first_name,last_name, created) values(#{firstName},#{lastName},#{created})")
    void insert(Employee employee);
    

    @Update("UPDATE employee SET first_name = #{firstName}, last_name = #{lastName} WHERE ID = #{id}")
    void update(Employee employee);

    @Delete("DELETE from employee WHERE ID = #{id}")
    void delete(int id);
   
    /*@Insert(insert)
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Student student);*/
}