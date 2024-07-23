import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = 'service_0lam6iu';
    const templateID = 'template_ph1jatn';
    const userID = 'Kzwoy5AgHirZE4_jX';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Moroesiphantsi</h1>
        <nav className="App-nav">
          <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
          <a href="#about" onClick={() => handleNavClick('about')}>About</a>
          <a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a>
          <a href="#services" onClick={() => handleNavClick('services')}>Services</a>
          <a href="#experience" onClick={() => handleNavClick('experience')}>Experience</a>
          <a href="#education" onClick={() => handleNavClick('education')}>Education</a>
          <a href="#portfolio" onClick={() => handleNavClick('portfolio')}>Portfolio</a>
          <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
        </nav>
      </header>
      <main className="App-main">
        {activeSection === 'home' && (
          <section id="home">
            <div className="profile-card">
              <img src="/profile.jpg" alt="Profile" className="profile-img" />
              <div className="profile-info">
                <h2>General Information</h2>
                <p><span className="info-logo">👤</span> Name: Moroesi Phantsi</p>
                <p><span className="info-logo">📍</span> Location: Lesotho, Mohale's Hoek</p>
                <p><span className="info-logo">📅</span> Date of Birth: 20/01/2002</p>
                <p><span className="info-logo">📞</span> Phone: +26651959738 / +26662033496</p>
                <p><span className="info-logo">🚺</span> Gender: Female</p>
                <p><span className="info-logo">🌍</span> Nationality: Mosotho</p>
                <p><span className="info-logo">📧</span> Email: <a href="mailto:rosinamoroesi412@gmail.com">rosinamoroesi412@gmail.com</a></p>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'about' && (
          <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="marquee-container">
              <p className="marquee-text">
                Hi, I'm Moroesi Phantsi. I'm passionate about web development and design, and I enjoy developing applications of all kinds. I specialize in UI/UX Design, focusing on creating user-centered interfaces that are not only aesthetically pleasing but also intuitive and functional. My goal is to enhance the overall user experience through thoughtful design and innovative solutions.
              </p>
            </div>
          </section>
        )}
        {activeSection === 'skills' && (
          <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>
                <i className="fab fa-js-square"></i>
                <span>JavaScript</span>
              </li>
              <li>
                <i className="fab fa-html5"></i>
                <span>HTML</span>
              </li>
              <li>
                <i className="fab fa-react"></i>
                <span>React</span>
              </li>
              <li>
                <i className="fab fa-css3-alt"></i>
                <span>CSS</span>
              </li>
              <li>
                <i className="fab fa-angular"></i>
                <span>Angular</span>
              </li>
              {/* Imma Add more skills next time */}
            </ul>
          </section>
        )}
        {activeSection === 'services' && (
          <section id="services" className="services-section">
            <h2>Services</h2>
            <ul className="services-list">
              <li>
                <i className="fas fa-laptop-code"></i>
                <div className="service-info">
                  <h3>Web Design and Development</h3>
                  <p>Creating stunning, responsive websites that work seamlessly across all devices.</p>
                </div>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <div className="service-info">
                  <h3>Application Development</h3>
                  <p>Developing high-quality applications with intuitive interfaces and smooth performance.</p>
                </div>
              </li>
              <li>
                <i className="fas fa-paint-brush"></i>
                <div className="service-info">
                  <h3>UI/UX Design</h3>
                  <p>Designing engaging and user-friendly interfaces that enhance the user experience.</p>
                </div>
              </li>
              {/* Add more services as needed */}
            </ul>
          </section>
        )}
        {activeSection === 'experience' && (
          <section id="experience">
            <h2>Experience</h2>
            <p>Imma Detail my professional experience here.</p>
            {/* Add specific experience details */}
          </section>
        )}
        {activeSection === 'education' && (
          <section id="education" className="education-section">
            <h2>Education</h2>
            <ul className="education-list">
              <li>
                <span className="education-icon">🏫</span>
                <div className="education-info">
                  <h3>Primary School</h3>
                  <p>Mokoroane Primary School</p>
                </div>
              </li>
              <li>
                <span className="education-icon">🏫</span>
                <div className="education-info">
                  <h3>Secondary School</h3>
                  <p>Johnson Baker High School</p>
                </div>
              </li>
              <li>
                <span className="education-icon">🏫</span>
                <div className="education-info">
                  <h3>High School</h3>
                  <p>Johnson Baker High School</p>
                </div>
              </li>
              <li>
                <span className="education-icon">🎓</span>
                <div className="education-info">
                  <h3>Tertiary</h3>
                  <p>Botho University</p>
                </div>
              </li>
            </ul>
          </section>
        )}
        {activeSection === 'portfolio' && (
          <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Imma show my portfolio projects here.</p>
            {/* Add links or descriptions of portfolio projects */}
          </section>
        )}
        {activeSection === 'contact' && (
          <section id="contact">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Moroesiphantsi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
