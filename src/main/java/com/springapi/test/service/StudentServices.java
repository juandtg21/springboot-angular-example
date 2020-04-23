package com.springapi.test.service;

import java.util.List;

import com.springapi.test.model.Student;

public interface StudentServices {


	Student save(Student student);

	List<Student> findAll();
	
	void deleteStudent(Long id);

	Student getStudentById(Long id);


}