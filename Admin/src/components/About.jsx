import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="my-14 px-6">
      <div className="max-w-7xl mx-auto rounded-xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg"
              alt="Education"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div className="pl-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              CPC Education
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              CPC Education provides structured, high-quality courses that help learners
              improve skills and grow professionally. Our platform allows administrators
              to register students, manage course details, and monitor progress efficiently
              with ease and flexibility.
            </p>

            <Link
              to="/courses/add"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow transition"
            >
              Add Course
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
