package com.cpc.myfirstapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Courses {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER,optional = true)
	@JoinColumn(name = "student_id",referencedColumnName = "id", nullable = true)
	private Student student;	
	
	private String name,duration;
	private Long amount;
	public Courses() {
		super();
	}
	public Courses(Student student, String name, String duration, Long amount) {
		super();
		this.student = student;
		this.name = name;
		this.duration = duration;
		this.amount = amount;
	}
	public Courses(Long id, Student student, String name, String duration, Long amount) {
		super();
		this.id = id;
		this.student = student;
		this.name = name;
		this.duration = duration;
		this.amount = amount;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	
	
	

}
