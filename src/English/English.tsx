import React, { useEffect, useRef } from "react";
import "../App.css";
import WhatsAppLink from "../WhatsApp/WhatsApp";
import ImageSlider from "../ImageSlider";

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
        <img src="./src/assets/logo1.jpg" alt="Law Firm Logo" />
        {/* <h2>Abdulrahman Abdullah AlHarbi Law and Legal Consultations</h2> */}
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
      <ImageSlider />
      <div className="divider"></div>
      <div className="header-container">
        <img
          className="abdulrahman"
          src="./src/assets/abdulrahman.jpeg"
          alt="abdulrahman"
        />
        <div className="header-text">
          <h1 className="welcomeee">
            Welcome to: <br />
            Abdul Rahman Abdullah Al-Harbi's Office
            <br /> for Legal Advocacy and Consultations
          </h1>
          <p>
            On behalf of myself and our team at the office:
            <br />
            "Abdul Rahman Abdullah Al-Harbi for Legal Consultation and
            Advocacy,"
            <br />
            I affirm our vow that we made to ourselves when we had the honor of
            working in law,
            <br />
            a vow emanating from the charter of our conscience in all our
            dealings.
            <br /> This is the vow we present to every client of our office:
            "Our supreme goal in practicing law is to protect the rights of our
            clients, and the means to achieve that are: mastery of work,
            integrity in performance, precision in follow-up, and exerting
            maximum effort and care.
          </p>
        </div>
      </div>
    </header>
  );
}

function About() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const MILESTONE_HEIGHT = 200; // Adjust based on your CSS

  useEffect(() => {
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused && timelineRef.current) {
        const maxScroll =
          timelineRef.current.scrollHeight - timelineRef.current.clientHeight;
        console.log("Max Scroll:", maxScroll);
        console.log("Current Scroll:", timelineRef.current.scrollTop);
        if (timelineRef.current.scrollTop < maxScroll - MILESTONE_HEIGHT) {
          timelineRef.current.scrollTop += MILESTONE_HEIGHT;
          console.log("Scrolling...");
        } else {
          // Reset to the start when reaching the end
          timelineRef.current.scrollTop = 0;
          console.log("Resetting...");
        }
      }
    };

    const handleMouseOver = () => (isPaused = true);
    const handleMouseOut = () => (isPaused = false);

    timelineRef.current?.addEventListener("mouseover", handleMouseOver);
    timelineRef.current?.addEventListener("mouseout", handleMouseOut);

    // Start the auto-scroll
    const intervalId = setInterval(autoScroll, 1000); // Scroll every 5 seconds

    // Clean up the interval and event listeners on component unmount
    return () => {
      clearInterval(intervalId);
      timelineRef.current?.removeEventListener("mouseover", handleMouseOver);
      timelineRef.current?.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <section id="journey">
      <h1>Professional Journey</h1>
      <div className="timeline" ref={timelineRef}>
        <div className="milestone">
          <h2>1990</h2>
          <p>Started Law School at XYZ University.</p>
        </div>
        <div className="milestone">
          <h2>1995</h2>
          <p>Joined ABC Law Firm as a Junior Advocate.</p>
        </div>
        <div className="milestone">
          <h2>2005</h2>
          <p>Founded my own Law Firm.</p>
        </div>
        <div className="milestone">
          <h2>2005</h2>
          <p>Founded my ownb  iqvfphbpiqv ubcw fvivcpib Law Firm.</p>
        </div>
        <div className="milestone">
          <h2>2005</h2>
          <p>Founded my own Law Firm.</p>
        </div>
        <div className="milestone">
          <h2>2005</h2>
          <p>Founded my own Law Firm.</p>
        </div>
        <div className="milestone">
          <h2>2005</h2>
          <p>Founded my own Law Firm.</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="common-container">
        <h1>Our Services</h1>
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
      {/* Contact Information */}
      <div className="contact-info">
        <h1>Contact Information</h1>
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
      <p className="foot">© 2023 Law Firm Name. All rights reserved.</p>
    </footer>
  );
}

export default EnglishApp;
