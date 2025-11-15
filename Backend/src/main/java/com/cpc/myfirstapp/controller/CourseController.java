package com.cpc.myfirstapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpc.myfirstapp.model.Courses;
import com.cpc.myfirstapp.services.CourseServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseServices services;
	
	@PostMapping("/save")
	public ResponseEntity<Map<String, Object>> save(@RequestBody Courses course) {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        // Save without assigning student
	        Courses savedCourse = services.saveCourse(course);

	        response.put("status", true);
	        response.put("message", "Course registered successfully");
	        response.put("data", savedCourse);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}

	
	@GetMapping("/getallcourses")
	public ResponseEntity<Map<String, Object>> getAllCourses() {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        List<Courses> details = services.getAllCourses();

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}
	
	
	@GetMapping("/getCourseById/{id}")
	public ResponseEntity<Map<String, Object>> getCourseById(@PathVariable(value = "id") Long id) {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        Courses details = services.getCourseById(id);

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}
	
	
	@DeleteMapping("/deleteCourseById/{id}")
	public ResponseEntity<Map<String, Object>> deleteCourseById(@PathVariable(value = "id") Long id) {	    
	    Map<String, Object> response = new HashMap<>();
	    try {
	        String details = services.deleteCourse(id);

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	    
	}
	
	
	@PostMapping("/update/{id}")
    public ResponseEntity<Map<String, Object>> updateCourse(@PathVariable Long id, @RequestBody Courses updatedCourse) {
        Map<String, Object> response = new HashMap<>();
        try {
            Courses details = services.updateCourse(id, updatedCourse);
            response.put("status", true);
            response.put("data", details);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            response.put("status", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

	
    @GetMapping("/search/{name}")
    public ResponseEntity<Map<String, Object>> searchCourse(@PathVariable String name) {
        Map<String, Object> response = new HashMap<>();
        try {
            List<Courses> details = services.searchByName(name);
            response.put("status", true);
            response.put("data", details);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            response.put("status", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    
    @GetMapping("/enrolled/{studentId}")
    public ResponseEntity<Map<String, Object>> getEnrolledCourses(@PathVariable Long studentId) {
        Map<String, Object> response = new HashMap<>();
        try {
            List<Courses> courses = services.getEnrolledCourses(studentId);

            response.put("status", true);
            response.put("data", courses);

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            response.put("status", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }


   
}
