package com.cpc.myfirstapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cpc.myfirstapp.model.Courses;

public interface CoursesRepository extends JpaRepository<Courses, Long> {
	 List<Courses> findByNameContainingIgnoreCase(String name);
	 List<Courses> findByStudent_Id(Long studentId);

}
