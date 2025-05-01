import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div className="py-16 about bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 text-gray-300 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-5/12 lg:w-4/12 flex justify-center">
            <div className="relative group">
              <img
                src="assets/ayush_formal.jpg"
                alt="Ayush Tiwari"
                className="w-64 h-64 object-cover rounded-full border-4 border-orange-500 shadow-xl transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white group-hover:opacity-30 transition-all duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-7/12 lg:w-8/12">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Hey there! 👋 I'm a creative and detail-oriented freelancer with a passion for designing and developing high-quality websites that are not just visually stunning but also highly functional and user-friendly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With years of experience in UI/UX design, frontend development, and full-stack projects, I specialize in HTML, CSS, JavaScript, Bootstrap, React, and PHP Laravel. Whether you need a responsive website, an interactive web app, or a custom-built solution, I bring a blend of creativity and technical expertise to turn ideas into reality.
              </p>

              <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-orange-500 shadow-lg">
                <h2 className='text-2xl font-bold text-green-400 mb-4'>What I Offer:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span><strong className="text-white">Custom Web Design & Development</strong> - Sleek, modern, and mobile-friendly designs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span><strong className="text-white">MERN Stack Projects</strong> - Scalable and efficient full-stack applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span><strong className="text-white">E-commerce & Business Websites</strong> - Tailored solutions to boost your online presence.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span><strong className="text-white">SEO & Performance Optimization</strong> - Ensuring fast and search-engine-friendly websites.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span><strong className="text-white">Bug Fixing & Enhancements</strong> - Improving and maintaining existing projects.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className='mt-10'>
              <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
              </h2>

              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="contact-details space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <a href="https://er-ayush-du.github.io/Responsive-Portfolio/" className="text-gray-300 hover:text-white transition-colors">Ayush Tiwari</a>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=110019+Kalkaji+New+Delhi" target="_blank" className="text-gray-300 hover:text-white transition-colors">110019 Kalkaji, New Delhi</a>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=er.ayushtiwari@gmail.com" className="text-gray-300 hover:text-white transition-colors">er.ayushtiwari@gmail.com</a>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <a href="tel:+919260932458" className="text-gray-300 hover:text-white transition-colors">+91 9260932458</a>
                  </div>
                </div>

                <div className='flex items-center justify-center md:justify-end'>
                  <a 
                    href="assets/AyushTiwari_Resume.pdf" 
                    target="_blank" 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}