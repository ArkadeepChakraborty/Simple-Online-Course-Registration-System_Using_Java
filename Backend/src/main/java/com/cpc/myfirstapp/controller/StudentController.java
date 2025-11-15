package com.cpc.myfirstapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpc.myfirstapp.model.Student;
import com.cpc.myfirstapp.security.JwtUtils;
import com.cpc.myfirstapp.services.StudentServices;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student")
public class StudentController 
{
	@Autowired
	private StudentServices services;
	
	 @Autowired
	    private AuthenticationManager authenticationManager;
	 
	 @Autowired
	    private JwtUtils jwtUtils;
	
	// Create a new Note (Student)
	@PostMapping("/save")
	public ResponseEntity<Map<String, Object>> save(@RequestBody Student s) {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        Student details = services.saveStudent(s);

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}
	
	
	@PostMapping("/login")
    public Map<String, Object> login(@RequestBody Student loginRequest) {
        Map<String, Object> response = new HashMap<>();
        System.out.println(loginRequest.getEmail()+" : "+loginRequest.getPassword());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );

            String token = jwtUtils.generateToken(loginRequest.getEmail());

            response.put("status", true);
            response.put("token", token);
            response.put("message", "Login successful");
        } catch (BadCredentialsException e) {
            response.put("status", false);
            response.put("message", "Invalid email or password");
        }

        return response;
    }


	
	@GetMapping("/getallstudents")
	public ResponseEntity<Map<String, Object>> getAllStudents() {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        List<Student> details = services.getAllStudents();

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}
	
	@GetMapping("/getStudentById/{id}")
	public ResponseEntity<Map<String, Object>> getStudentById(@PathVariable(value = "id") Long id) {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        Student details = services.getStudentById(id);

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}
	
	@GetMapping("/getStudentByEmail/{email}")
	public ResponseEntity<Map<String, Object>> getStudentByEmail(@PathVariable(value = "email") String email) {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        Student details = services.getStudentByEmail(email);

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}
	
	
	@PostMapping("/updateProfile/{id}")
	public ResponseEntity<Map<String, Object>> updateProfile(
	        @PathVariable Long id,
	        @RequestBody Map<String, String> request) {

	    Map<String, Object> response = new HashMap<>();
	    try {
	        String email = request.get("email");
	        String name = request.get("name");
	        String address = request.get("address");

	        Student updatedStudent = services.updateStudentDetails(id, email, name, address);

	        response.put("status", true);
	        response.put("data", updatedStudent);
	        return ResponseEntity.ok(response);

	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}

	
	@PostMapping("/updatePassword")
	public ResponseEntity<Map<String, Object>> updatePassword(@RequestBody Map<String, String> request) {

	    Map<String, Object> response = new HashMap<>();
	    try {
	        String email = request.get("email");
	        String newPassword = request.get("newPassword");

	        Student updatedStudent = services.updateStudentPassword(email, newPassword);

	        response.put("status", true);
	        response.put("message", "Password updated successfully");
	        response.put("data", updatedStudent.getEmail());

	        return ResponseEntity.ok(response);

	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}

	
	
	@DeleteMapping("/deleteStudentById/{id}")
	public ResponseEntity<Map<String, Object>> deleteStudentById(@PathVariable(value = "id") Long id) {	    
	    Map<String, Object> response = new HashMap<>();
	    try {
	        String details = services.deleteStudent(id);

	        response.put("status", true);
	        response.put("data", details);

	        return ResponseEntity.ok(response);
	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	    
	}
	
	
	@GetMapping("/getAllStudentIds")
	public ResponseEntity<Map<String, Object>> getAllStudentIds() {
	    Map<String, Object> response = new HashMap<>();
	    try {
	        List<Long> ids = services.getAllStudentIds();

	        response.put("status", true);
	        response.put("data", ids);

	        return ResponseEntity.ok(response);

	    } catch (RuntimeException e) {
	        response.put("status", false);
	        response.put("message", e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	    }
	}

}