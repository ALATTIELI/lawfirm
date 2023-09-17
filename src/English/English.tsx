import React from 'react';
import '../App.css';

function EnglishApp({ toggleLanguage }) {
    return (
    <div className="App">
      <Navbar toggleLanguage={toggleLanguage} />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar({ toggleLanguage }) {
    return (
    <nav>
      <h1>Law Firm Name</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contactus">Contact Us</a></li>
        <li>
          <button onClick={toggleLanguage}>العربية</button>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header id="home">
      <h2>Welcome to Our Law Firm</h2>
      <p>We provide the best legal services in town.</p>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>Our firm has been serving the community for over 20 years...</p>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <ul>
        <li>Personal Injury</li>
        <li>Corporate Law</li>
        <li>Family Law</li>
        {/* ... add other services here */}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactus">
      <h2>Contact Us</h2>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@lawfirm.com</p>
        <p>Phone: +1-123-456-7890</p>
        <p>Address: 123 Law Firm St., City, Country</p>
      </div>

      {/* Callback Form */}
      <div className="callback-form">
        <h3>Request a Callback</h3>
        <form>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div className="input-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" required />
          </div>
          <div className="input-group">
            <label>Message:</label>
            <textarea name="message" rows={4} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 Law Firm Name. All rights reserved.</p>
    </footer>
  );
}

export default EnglishApp;
