package com.springapi.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springapi.test.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
	
	@SuppressWarnings("unchecked")
	Student save(Student student);
}
