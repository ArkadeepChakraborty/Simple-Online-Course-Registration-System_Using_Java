package com.cpc.myfirstapp.services;

import java.util.List;

import com.cpc.myfirstapp.model.Student;

public interface StudentServices {
	List<Student> getAllStudents();	
	Student getStudentById(Long id);
	Student getStudentByEmail(String email);
	Student updateStudentDetails(Long id, String email, String name, String address);
	Student updateStudentPassword(String email, String newPassword);
	Student saveStudent(Student student);
	String deleteStudent(Long id);
	List<Long> getAllStudentIds();


}
