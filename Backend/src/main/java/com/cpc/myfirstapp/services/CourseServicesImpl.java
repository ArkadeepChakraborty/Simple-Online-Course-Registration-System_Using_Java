package com.cpc.myfirstapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpc.myfirstapp.model.Courses;
import com.cpc.myfirstapp.model.Student;
import com.cpc.myfirstapp.repository.CoursesRepository;
import com.cpc.myfirstapp.repository.StudentRepository;


@Service
public class CourseServicesImpl implements CourseServices {
	@Autowired private CoursesRepository  courseRepository;
	
	@Autowired
	private StudentRepository studentRepository;

	
	@Override public List<Courses> getAllCourses()
	{
		return courseRepository.findAll();
	}
	
	@Override public Courses getCourseById(Long id)
	{
		return courseRepository.findById(id).orElse(null);
	}
	
	@Override public Courses saveCourse(Courses course)
	{
		return courseRepository.save(course);
	}
	@Override
	public String deleteCourse(Long id) {
	    if (courseRepository.existsById(id)) {
	        courseRepository.deleteById(id);
	        return "Course deleted successfully with ID: " + id;
	    } else {
	        return "Course not found with ID: " + id;
	    }
	}
	
	@Override
    public Courses updateCourse(Long id, Courses course) {
        Courses existing = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        existing.setName(course.getName());
        existing.setDuration(course.getDuration());
        existing.setAmount(course.getAmount());

        return courseRepository.save(existing);
    }

    @Override
    public List<Courses> searchByName(String name) {
        return courseRepository.findByNameContainingIgnoreCase(name);
    }
    
    
    @Override
    public List<Courses> getEnrolledCourses(Long studentId) {
        return courseRepository.findByStudent_Id(studentId);
    }



}
