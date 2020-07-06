package com.springapi.test.model;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name="students")
@Access(AccessType.FIELD)
@ApiModel(description="Definition of all students")
public class Student extends ParentEntity {

	
	
	private static final long serialVersionUID = 4460017144555027875L;

	@Column(name="first_Name",nullable=false,length=255)
	@ApiModelProperty("the student last Name")
	private String firstName ;
	
	@Column(name="last_Name",nullable=false,length=255)
	@ApiModelProperty("the student first Name")
	private String lastName ;
	
	@Column(name="email",nullable=false,length=255)
	@ApiModelProperty("the student email")
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
