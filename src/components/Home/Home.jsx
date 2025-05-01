                import React from 'react'
import "./Home.css"
import About from '../About/About';
import Contact from '../Contact/Contact'
import Service from '../Service/Service';

export default function Home() {
  return (
    <>
      <div className="heroSection">
        <img
          src="assets\Hero_image.jpeg"
          alt="HeroImage"
          className="heroImage"
        />
        <div className="heroContent">
          <div className="heroText">
            <h1>I'm Ayush Tiwari.</h1>
            <p>I'am a <span>Computer Science Student</span> at <span>University Of Delhi</span></p>
          </div>

          <div className="social-icons">
            <a href="https://github.com/Er-Ayush-DU/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ayush_websolution?igsh=MW9lbGZ6eXF1M2JmNQ==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/1HMhJfPPsV/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/ErAyush654377" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <About />
      </div>

      {/* Our Services */}
      <div>
        <Service />
      </div>

      {/* Contact */}
      <div>
        <Contact />
      </div>
    </>
  );
}