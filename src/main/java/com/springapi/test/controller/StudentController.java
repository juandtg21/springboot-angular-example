package com.springapi.test.controller;

import java.io.IOException;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.springapi.test.model.Student;
import com.springapi.test.service.StudentServices;
import com.springapi.test.util.RestResponse;


import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@CrossOrigin(origins="http://localhost:4200")
@RestController

@RequestMapping(path = "api", produces = "application/json")
public class StudentController {
	
	@Autowired
	protected StudentServices studentServices;
	
	protected ObjectMapper mapper;
	
	@RequestMapping(value="/private/createStudent", method=RequestMethod.POST)
	@ApiOperation("Create students in DB with Id, firstName, lastName and email")
	 @ApiResponses(value = { 
		        @ApiResponse(code = 201, message = "student created", response = Student.class),
		        @ApiResponse(code = 200, message = "successful") })
	public RestResponse createStudent(@RequestBody String studentJson)
			throws JsonParseException, JsonMappingException, IOException 
	{
		this.mapper = new ObjectMapper();
		
	
		Student student = this.mapper.readValue(studentJson, Student.class);
		
		if(!this.validate(student))
		{
			return new RestResponse(HttpStatus.NOT_ACCEPTABLE.value(),"You must need to fill these fields");
		}
		this.studentServices.save(student);
		return new RestResponse(HttpStatus.CREATED.value(),"Student saved Successfully");
	}
	
	@RequestMapping(value="/private/updateStudent", method=RequestMethod.POST)
	@ApiOperation("update and specific student with specific id")
	@ApiResponses(value= {@ApiResponse(code = 200, message = "Ok",response=Student.class)})
	public RestResponse updateStudent(@RequestBody String studentJson)
			throws JsonParseException, JsonMappingException, IOException 
	{
		this.mapper = new ObjectMapper();
		
	
		Student student = this.mapper.readValue(studentJson, Student.class);
		
		if(!this.validate(student))
		{
			return new RestResponse(HttpStatus.NOT_ACCEPTABLE.value(),"You must need to fill this fields");
		}
		this.studentServices.save(student);
		return new RestResponse(HttpStatus.OK.value(),"Student updated Successfully");
	}
	
	
	@RequestMapping(value="/private/GetStudents",method=RequestMethod.GET)
	@ApiOperation("Get all the students in DB")
	@ApiResponses(value= {@ApiResponse(code = 200, message = "Ok",response=Student.class)})
	public List<Student> GetStudents()
	{
		return this.studentServices.findAll();
	}
	
	
	@RequestMapping(value="/private/getStudentById/{id}",method=RequestMethod.GET)
	@ApiOperation("Get one student with specific Id")
	@ApiResponses(value= {@ApiResponse(code = 200, message = "Ok",response=Student.class)})
	public Student GetStudentById(@ApiParam(value="Id value for the student you need to retrieve",required=true)
					@PathVariable long id)
			throws Exception 
	{
		this.mapper = new ObjectMapper();
		

		Student student = this.studentServices.getStudentById(id);
		
		if(student.getId()==null)
		{
			throw new Exception("Student not found");
		}
		return this.studentServices.getStudentById(student.getId());

	}
	
	@DeleteMapping(value="/private/deleteStudent/{id}")
	@ApiOperation("Delete one student with specific Id")
	@ApiResponses(value= {@ApiResponse(code = 204, message = "NO_CONTENT",response=Student.class)})
	public RestResponse DeleteStudent(@ApiParam(value="Id value for the student you need to delete",required=true)
						@PathVariable long id)
			throws Exception 
	{
		Student student = this.studentServices.getStudentById(id);
		
		if(student.getId()==null)
		{
			throw new Exception("Student not found");
		}
		this.studentServices.deleteStudent(student.getId());
		return new RestResponse(HttpStatus.NO_CONTENT.value()," Student " + student.getFirstName() + " " + student.getLastName() + " deleted Successfully");
		
	}
	
	private boolean validate(Student student)
	{
		
		boolean isvalid=true;
		
		
		if(StringUtils.trimToNull(student.getFirstName())==null)
		{
			isvalid=false;
		}
		if(StringUtils.trimToNull(student.getLastName())==null)
		{
			isvalid=false;
		}
		if(StringUtils.trimToNull(student.getEmail())==null)
		{
			isvalid=false;
		}
		return isvalid;
	}
}
