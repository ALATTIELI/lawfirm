import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppLink from '../WhatsApp/WhatsApp';
import ImageSlider from '../ImageSlider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../App.css';

function EnglishApp({ toggleLanguage }) {
  return (
    <div className="App">
      <Navbar toggleLanguage={toggleLanguage} />
      <div className="main-content">
        <Header />
        <About />
        <Services />
        <Contact />
        <Footer />
        <WhatsAppLink />
      </div>
    </div>
  );
}

function Navbar({ toggleLanguage }) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#b2925f', boxShadow: '5px 5px 20px #b2925f' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div className="logo">
          <img src="/logo1.jpg" alt="Law Firm Logo" />
        </div>
        <IconButton className="language-button" onClick={toggleLanguage} sx={{ fontSize: '4rem' }}>
          <LanguageIcon fontSize="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
} 

function Header() {
  return (
    <header id="home">
      <div className="divider"></div>
      <div className="header-container">
        <img
          className="abdulrahman"
          src="/abdulrahman.jpg"
          alt="abdulrahman"
        />
        <div className="header-text">
          <h1 className="welcomeee">
            Welcome to: <br />
            Abdul Rahman Abdullah Al-Harbi's Office
            <br /> for Legal Advocacy and Consultations
          </h1>
          <div className="intro">
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
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="journey">
      <h1>Professional career</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            1994
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Started Professional Career
            </Typography>
            <Typography>
              Started his professional career and joined several government entities, gaining scientific, practical, and administrative experience of no less than 28 years.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2009
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Graduated from College of Islamic and Arabic Studies Dubai
            </Typography>
            <Typography>
               After completing his university studies there.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2013
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Graduated from College of Imam Malik for Sharia and Law Dubai
            </Typography>
            <Typography>
              Obtaining a bachelor's degree in Sharia and Law, and later completed his postgraduate studies there.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2014
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Legal Practice
            </Typography>
            <Typography>
              Joined one of the most important law firms in Abu Dhabi for training in legal practice, then registered with the Ministry of Justice in the roll of non-practicing lawyers, while continuing in the employment sector as follows:
              <ul>
                <li className="timeline-list-aaa">Worked at Abu Dhabi Police in the Department of Social Support Centers, serving as a Legal and Social Consultant, handling various cases, studying them from legal and social perspectives, dealing with 30 types of social cases, identifying their causes, and finding appropriate solutions, in addition to being a certified family arbitrator.</li>
                <li className="timeline-list-aaa">Joined the Family Care Authority and obtained the status of certified Child Protection Specialist under the Child Protection Law (Wadeema Law), and obtained a professional license in social care from the Department of Community Development.</li>
                <li className="timeline-list-aaa">Worked with some government entities as a consultant in addiction cases, dealing directly with addicts for their rehabilitation and reintegration into society.</li>
                <li className="timeline-list-aaa">Part of the Expert Network team at the Early Childhood Authority in Abu Dhabi (Expert in Parental Care and Child Protection).</li>
                <li className="timeline-list-aaa">Certified trainer and lecturer, participated in numerous conferences and seminars, and organized training courses in the legal and social care fields.</li>
                <li className="timeline-list-aaa">Received numerous medals, honors, and certificates of appreciation and praise from government entities throughout his professional journey.</li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Establishing a law office
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
            Establishing a law office
            </Typography>
            <Typography>
  He established the Abdulrahman Abdullah AlHarbi Law and Legal Consultancy Office, which specializes in personal status cases, criminal cases, commercial cases, corporate matters, and all other legal fields.
  <ul>
    <li className="timeline-list-aaa">The Abdulrahman Abdullah AlHarbi Law and Legal Consultancy Office obtained a license as a certified contract notary from the Department of Economic Development in Abu Dhabi. Under this license, the office notarizes company incorporation contracts and their amendments, as well as documenting the minutes of general assemblies.</li>
  </ul>
</Typography>

          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="common-container">
        <h1>Our Services</h1>
        <ul>
          <li>
            Civil cases of all types, including providing legal assistance to
            protect the rights and real estate properties of the office's
            clients.
          </li>
          <li>
            Commercial cases of all types, including disputes involving
            banking transactions, contract disputes, and financial claims
            arising from the supply of goods, works, and services.
          </li>
          <li>
            Criminal cases, including criminal pleadings before various court
            levels and representing office clients before police stations and
            public prosecutors.
          </li>
          <li>Representation of our clients in personal status cases.</li>
          <li>Company establishment procedures.</li>
          <li>
            Notarizing company contracts and amendments, and their annexes,
            in accordance with the notarization jurisdiction issued by the
            Economic Development Department in Abu Dhabi.
          </li>
          <li>Representation of office clients in arbitration cases.</li>
          <li>Execution of judgments and debt collection.</li>
          <li>
            Providing legal consultations to individuals and companies and
            drafting contracts and agreements to regulate their financial
            transactions, as a preventive measure and to avoid litigation, and
            to prepare for court conditions if litigation becomes necessary.
          </li>
          <li>
            Labor disputes, including providing legal consultations to
            employers and employees in accordance with labor law.
          </li>
          <li>
            Handling cases outside the country in partnership and
            coordination with regional law firms.
          </li>
          <li>Insurance disputes related to accidents and insured risks.</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactus">
      <ImageSlider />
      <div className="contact-info">
        <h1>Contact Information</h1>
        <p>
          <EmailIcon /> Email: a@alharbilawyer.ae
        </p>
        <p>
          <PhoneIcon /> Phone: +97126330061 / +971503141420
        </p>
        <p>
          <LocationOnIcon />
          <a
            href="https://maps.google.com/?q=24.478447,54.351387"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Address: First Abu Dhabi Bank Tower, 8th Floor, Al Hosun Street, Family Garden, Abu Dhabi, United Arab Emirates, P.O. Box: 6054
          </a>
        </p>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer>
      <p className="foot">© 2024 Abdulrahman Abdullah AlHarbi Law. All rights reserved.</p>
    </footer>
  );
}


export default EnglishApp;
