import React from "react";
import "../App.css";
import WhatsApp from "../WhatsApp";
import WhatsAppLink from "../WhatsApp";

function EnglishApp({ toggleLanguage }) {
  return (
    <div className="App">
      <Navbar toggleLanguage={toggleLanguage} />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppLink />
    </div>
  );
}

function Navbar({ toggleLanguage }) {
  return (
    <nav>
      <div className="logo">
        <img src="./src/assets/logo.png" alt="Law Firm Logo" />
        <h3>Abdulrahman Abdullah AlHarbi Law and Legal Consultations</h3>
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contactus">Contact Us</a>
        </li>
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
      {/* <div className="common-container"> */}
      {/* <div className="welcomeimage">
        <img src="./src/assets/court.jpg" alt="Law Firm Logo" />
      </div> */}
      <h1>Welcome to Our Law Firm</h1>
      <p>We provide the best legal services in town.</p>
      {/* </div> */}
    </header>
  );
}

function About() {
  return (
    <section id="about">
      {/* <div className="common-container"> */}
      <h1>About Us</h1>
      <p>Our firm has been serving the community for over 20 years...</p>
      {/* </div> */}
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="common-container">
        <h2>Our Services</h2>
        <ul>
          <p>
            1. Civil cases of all types, including providing legal assistance to
            protect the rights and real estate properties of the office's
            clients.
          </p>
          <p>
            2. Commercial cases of all types, including disputes involving
            banking transactions, contract disputes, and financial claims
            arising from the supply of goods, works, and services.
          </p>
          <p>
            3. Criminal cases, including criminal pleadings before various court
            levels and representing office clients before police stations and
            public prosecutors.
          </p>
          <p>4. Representation of our clients in personal status cases.</p>
          <p>5. Company establishment procedures.</p>
          <p>
            6. Notarizing company contracts and amendments, and their annexes,
            in accordance with the notarization jurisdiction issued by the
            Economic Development Department in Abu Dhabi.
          </p>
          <p>7. Representation of office clients in arbitration cases.</p>
          <p>8. Execution of judgments and debt collection.</p>
          <p>
            9. Providing legal consultations to individuals and companies and
            drafting contracts and agreements to regulate their financial
            transactions, as a preventive measure and to avoid litigation, and
            to prepare for court conditions if litigation becomes necessary.
          </p>
          <p>
            10. Labor disputes, including providing legal consultations to
            employers and employees in accordance with labor law.
          </p>
          <p>
            11. Handling cases outside the country in partnership and
            coordination with regional law firms.
          </p>
          <p>12. Insurance disputes related to accidents and insured risks.</p>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactus">
      {/* <div className="common-container"> */}
      <h2>Contact Us</h2>
      {/* Contact Information */}
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@lawfirm.com</p>
        <p>Phone: +1-123-456-7890</p>
        <p>Address: 123 Law Firm St., City, Country</p>
      </div>
      {/* </div> */}
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
