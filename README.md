# Simple-Online-Course-Registration-System
📚 CPC Education – Admin & Student Portal

A complete full-stack learning management system built with Spring Boot, JWT Authentication, React.js, and Tailwind CSS.

<p align="center"> <img src="https://img.shields.io/badge/Java-17-blue" /> <img src="https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen" /> <img src="https://img.shields.io/badge/React-18-blueviolet" /> <img src="https://img.shields.io/badge/MongoDB-Database-success" /> <img src="https://img.shields.io/badge/JWT-Authentication-orange" /> </p>
🚀 Project Overview

This repository contains two frontends and one backend:

🛠 Admin Portal

1. Add / Edit / Delete Courses

2. Dashboard

🎓 Student Portal

1. Browse all courses

2. Search courses

3. View enrolled courses

4. Update profile & password

5. Login with JWT

⚙ Backend (Spring Boot)

1. Student APIs

2. Course APIs

3. JWT Authentication

4. Password encryption

5. Search & filter support


🧩 Tech Stack

1. React.js

2. React Router

3. Axios

4. Tailwind CSS

5. Backend

6. Spring Boot

7. Spring Security + JWT

8. Hibernate

9. MySQL

🔑 API Documentation

👨‍🎓 Student APIs

1. Register Student:  (POST) /student/save

2. Login Student (JWT Token):  (POST) /student/login

3. Get All Students:  (GET) /student/getallstudents

4. Update Profile:  (POST) /student/updateProfile/{id}

5. Update Password:  (POST) /student/updatePassword

6. Delete Student:  (DELETE) /student/deleteStudentById/{id}

📘 Course APIs

1. Add Course:  (POST) /course/save

2. Get All Courses:  (GET) /course/getallcourses

3. Search Course:  (GET) /course/search/{name}

4. Update Course:  (POST) /course/update/{id}

5. Delete Course:  (DELETE) /course/deleteCourseById/{id}

6. Get Enrolled Courses:  (GET) /course/enrolled/{studentId}

🙌 Contributing

Pull requests are welcome!

Feel free to open issues for new features or bug reports.
