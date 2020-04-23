package com.springapi.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapi.test.dao.StudentRepository;
import com.springapi.test.model.Student;

@Service
public class StudentServicesImplement implements StudentServices {
	
	@Autowired
	protected StudentRepository studentRepository;

	@Override
	public Student save(Student student) {
		return this.studentRepository.save(student);
	}

	@Override
	public List<Student> findAll() {
		return this.studentRepository.findAll();
	}

	@Override
	public void deleteStudent(Long id) {
		this.studentRepository.deleteById(id);
		
	}

	@Override
	public Student getStudentById(Long id) {
		return this.studentRepository.findById(id).orElse(null);
	}

	
		
	

}

