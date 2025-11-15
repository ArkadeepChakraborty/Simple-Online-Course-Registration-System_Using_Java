package com.cpc.myfirstapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cpc.myfirstapp.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
	Optional<Student> findByEmail(String email);
	
	@Query("SELECT s.id FROM Student s")
    List<Long> findAllStudentIds();
}
