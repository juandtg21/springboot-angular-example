package com.springapi.test.model;

import java.io.Serializable;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import io.swagger.annotations.ApiModelProperty;

import lombok.Data;

@MappedSuperclass
@Access(AccessType.FIELD)
@Data
public class ParentEntity implements Serializable {

	private static final long serialVersionUID = -4611815928732870812L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	@ApiModelProperty("the unique Id of the student")
	private Long id;


}
