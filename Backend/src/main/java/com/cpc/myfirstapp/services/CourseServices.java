package com.cpc.myfirstapp.services;

import java.util.List;

import com.cpc.myfirstapp.model.Courses;


public interface CourseServices {
	List<Courses> getAllCourses();
	Courses getCourseById(Long id);
	Courses saveCourse(Courses course);
	String deleteCourse(Long id);
	Courses updateCourse(Long id, Courses course);
    List<Courses> searchByName(String name);
    List<Courses> getEnrolledCourses(Long studentId);
}
