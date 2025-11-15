import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20" id="footer">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CPC Education</h2>
          <p className="text-gray-300">
            A platform where students can explore courses, learn anything,
            anytime and grow their career in the best possible way.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-xl font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Courses</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold mb-3">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-300">
            <li>+91 9330163527</li>
            <li>support@cpceducation.com</li>
            <li>West Bengal, India</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CPC Education — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;