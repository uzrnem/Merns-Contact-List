/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gisue.plusyou.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

	@Query("FROM #{#entityName} where user_id = ?1")
	List<Contact> findByUserId(int id); 
}
