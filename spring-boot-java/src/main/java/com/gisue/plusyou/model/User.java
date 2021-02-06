/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
package com.gisue.plusyou.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;

import org.hibernate.annotations.CreationTimestamp;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class User {

	@Id  //ID primary key
	@JsonIgnore  //Ignore value while deserialization
	@GeneratedValue(strategy = GenerationType.AUTO) // auto increment
	private Integer userId;

	@NotEmpty
	@Size(min=2, max=20, message="First Name should have 2-20 characters")
	private String firstName;

	@NotEmpty
	@Size(min=2, max=20, message="Last Name should have 2-20 characters")
	private String lastName;

	@NotEmpty
	@Column(updatable = false) //One time only password can be set
	@Size(min=2, max=20, message="User Name should have 2-20 characters")
	private String userName;

	@NotEmpty
	@Column(updatable = false)
	@JsonProperty(access=Access.WRITE_ONLY)	//No read permission, Ignored while serialization
	@Size(min=2, max=80, message="Password should have 2-20 characters")
	private String password;

	@JsonIgnore
	@CreationTimestamp
	private Date created;


	@OneToMany(cascade = CascadeType.PERSIST)
	@JoinColumn(name="userId")
	@JsonIgnore
	//@OrderColumn(name="type")
	private List<Contact> contacts;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		
		this.password = password;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> answers) {
		this.contacts = contacts;
	}
}
/*
@Table(uniqueConstraints = {
      @UniqueConstraint(columnNames = "userName", name = "uniqueUserNameConstraint")}
)*/
