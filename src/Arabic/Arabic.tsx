import React from "react";
import "../App.css";
import "./Arabic.css";
import WhatsAppLink from "../WhatsApp/WhatsApp";
import ImageSlider from "../ImageSlider";
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";

function ArabicApp({ toggleLanguage }) {
  return (
    <div className="App rtl">
      {" "}
      {/* Add the 'rtl' class for RTL layout */}
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
        {/* <h2> عبدالرحمن عبدالله الحربي للمحاماة والاستشارات القانونية </h2> */}
      </div>
      <ul>
        <li>
          <a href="#home">الصفحة الرئيسية</a>
        </li>
        <li>
          <a href="#about">من نحن</a>
        </li>
        <li>
          <a href="#services">خدماتنا</a>
        </li>
        <li>
          <a href="#contactus">اتصل بنا</a>
        </li>
        <li>
          <button onClick={toggleLanguage} className="language-button">
            English
          </button>
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
            مرحباً بكم في مكتب عبد الرحمن عبد الله الحربي <br /> للمحاماة
            والاستشارات القانونية
          </h1>
          <div className="ppp">
            <p>
              باسمي وباسم فريق العمل في مكتبنا :<br />
              " عبد الرحمن عبد الله الحربي للمحاماة والاستشارات القانونية "
              <br />
              أؤكد عهدنا الذي قطعناه على أنفسنا ، عندما تشرفنا بالعمل في
              المحاماة ،
              <br />
              والصادر من ميثاق ضمائرنا في سائر التعاملات ،<br />
              وهو العهد الذي نقدمه بين يدي كل متعامل مع مكتبنا :<br />
              " إن هدفنا الأسمى من العمل بالمحاماة هو حماية حقوق موكلينا ،<br />
              وأدواتنا إلى ذلك : إتقان العمل ، وأمانة الآداء ، ودقة المتابعة ،
              <br />
              وبذل الجهد والعناية القصوى "<br />
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
          <h1>Professional Journey</h1>
          <Timeline position="alternate">
              <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                          Law School
                      </Typography>
                      <Typography>Started Law School at XYZ University.</Typography>
                  </TimelineContent>
                  <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                  >
                      1990
                  </TimelineOppositeContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                          Junior Advocate
                      </Typography>
                      <Typography>Joined ABC Law Firm as a Junior Advocate.</Typography>
                  </TimelineContent>
                  <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                  >
                      1995
                  </TimelineOppositeContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                          Founded Law Firm
                      </Typography>
                      <Typography>Founded my own Law Firm.</Typography>
                  </TimelineContent>
                  <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                  >
                      2005
                  </TimelineOppositeContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                          Senior Advocate
                      </Typography>
                      <Typography>Became a Senior Advocate at ABC Law Firm.</Typography>
                  </TimelineContent>
                  <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                  >
                      2010
                  </TimelineOppositeContent>
              </TimelineItem>

              <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                          Legal Awards
                      </Typography>
                      <Typography>Received legal awards for outstanding performance.</Typography>
                  </TimelineContent>
                  <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                  >
                      2015
                  </TimelineOppositeContent>
              </TimelineItem>

          </Timeline>
      </section>
  );
}



function Services() {
  return (
    <section id="services">
      <div className="common-container">
        <h1>خدماتنا</h1>
        <ul>
          <p>
            ١. القضايا المدنية بكافة أنواعها بما تشمله من تقديم المساعدة
            القانونية لحماية الحقوق والممتلكات العقارية لعملاء المكتب
          </p>
          <p>
            ٢. القضايا التجارية بكافة أنواعها تشمله من منازعات اعمال البنوك
            ومنازعات عقود المقاولات والمطالبات المالية الناتجة من توريد البضائع
            والاعمال والخدمات{" "}
          </p>
          <p>
            ٣. القضايا الجزائية بما تنطوي عليه من مرافعات جزائية امام مختلف
            درجات المحاكم وتمثيل عملاء المكتب امام مراكز الشرطة والنيابات{" "}
          </p>
          <p>٤. تمثيل عملائنا في قضايا الأحوال الشخصية </p>
          <p>٥. اعمال تأسيس الشركات </p>
          <p>
            ٦. توثيق عقود الشركات وتعديلاتها وملاحقها بما للمكتب من رجعية
            التوثيق الصادرة من دائرة التنمية الاقتصادية في ابوظبي{" "}
          </p>
          <p>٧. تمثيل عملاء المكتب في قضايا التحكيم</p>
          <p>٨. تنفيذ الاحكام وتحصيل الديون </p>
          <p>
            ٩. تقديم الاستشارات القانونية للأفراد والشركات وصياغة العقود
            والاتفاقيات تنظيماً لتعاملاتهم المالية توقياً واتقاء للتقاضي وتهيئه
            لشروط تقاضي محكمة على فرض وقوعه{" "}
          </p>
          <p>
            ١٠. المنازعات العمالية بما تشمل من تقديم الاستشارات القانونية لأصحاب
            العمل و الموظفين تطبيقاً لقانون العمل{" "}
          </p>
          <p>
            ١١. متابعة القضايا خارج الدولة بالشراكة والتنسيق مع مكاتب المحاماة
            الإقليم{" "}
          </p>
          <p>١٢. منازعات التامين على الحوادث والأخطار المؤمن عليها</p>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactus">
      <div className="contact-info">
        <h1>معلومات الاتصال</h1>
        <p>البريد الإلكتروني: contact@lawfirm.com</p>
        <p>الهاتف: +1-123-456-7890</p>
        <p>العنوان: 123 شارع المكتب القانوني، المدينة، البلد</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 اسم الشركة القانونية. كل الحقوق محفوظة.</p>
    </footer>
  );
}

export default ArabicApp;
