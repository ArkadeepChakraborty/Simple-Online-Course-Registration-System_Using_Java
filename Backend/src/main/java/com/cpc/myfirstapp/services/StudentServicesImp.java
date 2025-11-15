package com.cpc.myfirstapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cpc.myfirstapp.model.Student;
import com.cpc.myfirstapp.repository.StudentRepository;

@Service
public class StudentServicesImp implements StudentServices{
	@Autowired private StudentRepository studentRepository;
	
	@Autowired 
	private PasswordEncoder passwordEncoder;
	
	@Override public List<Student> getAllStudents()
	{
		return studentRepository.findAll();
	}
	
	@Override public Student getStudentById(Long id)
	{
		return studentRepository.findById(id).orElse(null);
	}
	@Override public Student getStudentByEmail(String email)
	{
		return studentRepository.findByEmail(email).orElse(null);
	}
	@Override public Student saveStudent(Student student)
	{
		String hashedPassword = passwordEncoder.encode(student.getPassword()); 
		student.setPassword(hashedPassword); 
		return studentRepository.save(student);
	}
	@Override
	public Student updateStudentDetails(Long id, String email, String name, String address) {
	    Student student = studentRepository.findById(id).orElse(null);
	    if (student == null) {
	        throw new RuntimeException("Student not found with id: " + id);
	    }

	    student.setEmail(email);
	    student.setName(name);
	    student.setAddress(address);

	    return studentRepository.save(student);
	}

	@Override
	public Student updateStudentPassword(String email, String newPassword) {
	    Student student = studentRepository.findByEmail(email).orElse(null);
	    if (student == null) {
	        throw new RuntimeException("No student found with email: " + email);
	    }

	    String hashedPassword = passwordEncoder.encode(newPassword);
	    student.setPassword(hashedPassword);

	    return studentRepository.save(student);
	}
	@Override
	public String deleteStudent(Long id) {
	    if (studentRepository.existsById(id)) {
	        studentRepository.deleteById(id);
	        return "Student deleted successfully with ID: " + id;
	    } else {
	        return "Student not found with ID: " + id;
	    }
	}
	
	@Override
	public List<Long> getAllStudentIds() {
	    return studentRepository.findAllStudentIds();
	}


}
