/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gisue.plusyou.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("FROM #{#entityName} where user_name = ?1")
	User findByUserName(String userName);
}