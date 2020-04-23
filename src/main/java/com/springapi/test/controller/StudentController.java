package com.springapi.test.controller;

import java.io.IOException;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentController {
	
	@Autowired
	protected StudentServices studentServices;
	
	
	
	protected ObjectMapper mapper;
	
	
	
	@RequestMapping(value="/createStudent", method=RequestMethod.POST)
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
	@RequestMapping(value="/updateStudent", method=RequestMethod.POST)
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
	
	
	@GetMapping(value="/GetStudents")
	public List<Student> GetStudents()
	{
		return this.studentServices.findAll();
	}
	
	
	@GetMapping(value="/getStudentById/{id}")
	public Student GetStudentById(@PathVariable long id)
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
	
	@DeleteMapping(value="/deleteStudent/{id}")
	public RestResponse DeleteStudent(@PathVariable long id)
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
