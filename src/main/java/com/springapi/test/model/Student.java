package com.springapi.test.model;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;

@Entity
@Table(name="students")
@Access(AccessType.FIELD)
public class Student extends ParentEntity {

	
	
	private static final long serialVersionUID = 4460017144555027875L;

	@Column(name="first_Name",nullable=false,length=255)
	private String firstName ;
	
	@Column(name="last_Name",nullable=false,length=255)
	private String lastName ;
	
	@Column(name="email",nullable=false,length=255)
	private String email;

	
	
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

}
