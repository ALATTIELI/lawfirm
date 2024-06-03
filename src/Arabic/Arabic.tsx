import React from "react";
import "../App.css";
import "./Arabic.css";
import WhatsAppLink from "../WhatsApp/WhatsApp";
import ImageSlider from "../ImageSlider";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

const ArabicApp = ({ toggleLanguage }) => {
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
};

const Navbar = ({ toggleLanguage }) => {
  return (
    <nav>
      <div className="logo">
        <img src="./src/assets/logo1.jpg" alt="Law Firm Logo" />
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
};

const Header = () => {
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
};

const About = () => {
  return (
    <section id="journey">
      <h1>المسيرة المهنية</h1>
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
          <TimelineContent className="rtl" sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              بدأ مسيرته المهنية
            </Typography>
            <Typography>
              بدأ مسيرته المهنية والتحق بالعمل لدى عدة جهات حكومية وحصل من خلالها على خبرة علمية وعملية وخدمة إداريه لاتقل عن 28 سنه.
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
          <TimelineContent className="rtl" sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              تخرج من كلية الدراسات الإسلامية والعربية
            </Typography>
            <Typography>
              تخرج من كلية الدراسات الإسلامية والعربيه في دبي ، بعد أن أكمل الدراسة الجامعية فيها.
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
          <TimelineContent className="rtl" sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              تخرج من كلية الإمام مالك للشريعة والقانون
            </Typography>
            <Typography>
              تخرج من كليه الإمام مالك للشريعة والقانون في دبي ، وحصل على البكالوريوس في الشريعة والقانون، ثم أكمل الدراسات العليا فيها.
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
          <TimelineContent className="rtl" sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              العمل بالمحاماة
            </Typography>
            <Typography>
              التحق للتدرب على أعمال المحاماة لدى أحد أهم مكاتب المحاماة في أبو ظبي ، ثم قيد في وزارة العدل ، جدول المحامين غير المشتغلين ، مع الاستمرار في السلك الوظفيي على النحو الآتي:
              <ul className="rtl">
                <li className="timeline-list-aaa">عمل لدى شرطة أبوظبي في إدارة مراكز الدعم الاجتماعي ، وشغل منصب مستشار قانوني واجتماعي وتناول من خلالها القضايا الوارده لديها ودراستها من الجانب القانوني والاجتماعي والتعامل مع ٣٠ نوع من القضايا والحالات المجتمعية والوقوف على اسبابها وإيجاد الحلول المناسبة لها بالاضافة لكونه محكما اسريا معتمدا.</li>
                <li className="timeline-list-aaa">التحق في هيئة الرعاية الاسريه وحصل على صفة اختصاصي حماية الطفل معتمد ، وفق قانون حماية الطفل (قانون وديمة) وحصل على الرخصة المهنية في الرعاية الاجتماعية من دائرة تنمية المجتمع.</li>
                <li className="timeline-list-aaa">عمل لدى بعض الجهات الحكومية ، مستشار في قضايا الإدمان و التعامل بشكل مباشر مع المدمنين لإعادة تأهيلهم ودمجهم في المجتمع.</li>
                <li className="timeline-list-aaa">عمل ضمن فريق شبكة الخبراء في هيئة الطفولة المبكرة أبوظبي ، (خبير في الرعاية الوالدية وحماية الطفل).</li>
                <li className="timeline-list-aaa">مدرب ومحاضر معتمد ، شارك في العديد من المؤتمرات والندوات وإعداد الدورات التدريبية في الجانب القانوني والرعاية الاجتماعية.</li>
                <li className="timeline-list-aaa">حاز على العديد من الأوسمة والتكريمات وشهادات الشكر والثناء من قبل الجهات الحكومية. في مسيرته المهنية.</li>
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
            تأسيس مكتب المحاماة
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="rtl" sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              تأسيس مكتب المحاماة
            </Typography>
            <Typography>
              قام بتأسيس مكتب عبدالرحمن عبدالله الحربي للمحاماة والإستشارات القانونية المتخصص في قضايا الأحوال الشخصية ، والقضايا الجزائية ، والقضايا التجارية ، وأعمال وقضايا الشركات ، وجميع المجالات القانونية الأخرى.
              <ul className="rtl">
                <li className="timeline-list-aaa">حصل مكتب عبدالرحمن عبدالله الحربي للمحاماة والاستشارات القانونية على تصريح لموثق عقود معتمد من دائرة التنمية الاقتصادية في أبوظبي . وبموجب هذا التصريح ، يقوم بتوثيق عقود تأسيس الشركات وملاحقها وتوثيق محاضر الجمعيات العمومية.</li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};


const Services = () => {
  return (
    <section id="services" className="rtl">
      <div className="common-container">
        <h1>خدماتنا</h1>
        <ul>
          <li>
            القضايا المدنية بكافة أنواعها بما تشمله من تقديم المساعدة
            القانونية لحماية الحقوق والممتلكات العقارية لعملاء المكتب
          </li>
          <li>
            القضايا التجارية بكافة أنواعها تشمله من منازعات اعمال البنوك
            ومنازعات عقود المقاولات والمطالبات المالية الناتجة من توريد البضائع
            والاعمال والخدمات
          </li>
          <li>
            القضايا الجزائية بما تنطوي عليه من مرافعات جزائية امام مختلف
            درجات المحاكم وتمثيل عملاء المكتب امام مراكز الشرطة والنيابات
          </li>
          <li>تمثيل عملائنا في قضايا الأحوال الشخصية</li>
          <li>اعمال تأسيس الشركات</li>
          <li>
            توثيق عقود الشركات وتعديلاتها وملاحقها بما للمكتب من رجعية
            التوثيق الصادرة من دائرة التنمية الاقتصادية في ابوظبي
          </li>
          <li>تمثيل عملاء المكتب في قضايا التحكيم</li>
          <li>تنفيذ الاحكام وتحصيل الديون</li>
          <li>
            تقديم الاستشارات القانونية للأفراد والشركات وصياغة العقود
            والاتفاقيات تنظيماً لتعاملاتهم المالية وتوقياً لاتقاء اي تقاضي وتهيئه
            لشروط تقاضي المحكمة على فرض وقوعه
          </li>
          <li>
            المنازعات العمالية بما تشمل من تقديم الاستشارات القانونية لأصحاب
            العمل و الموظفين تطبيقاً لقانون العمل
          </li>
          <li>
            متابعة القضايا خارج الدولة بالشراكة والتنسيق مع مكاتب المحاماة
            الإقليم
          </li>
          <li>منازعات التامين على الحوادث والأخطار المؤمن عليها</li>
        </ul>
      </div>
    </section>
  );
};

function Contact() {
  return (
    <section id="contactus" className="rtl">
      <div className="contact-info">
        <h1>معلومات الاتصال</h1>
        <p>البريد الإلكتروني: a@alharbilawyer.ae</p>
        <p>الهاتف: <span style={{ direction: "ltr", unicodeBidi: "embed" }}>+97126330061 / +971503141420</span></p>
        <p>
          العنوان: برج بنك أبوظبي الأول، الطابق الثامن، شارع الحصن، حديقة العائلة، أبوظبي، 6054، الإمارات العربية المتحدة
        </p>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="rtl">
      <p className="foot">© 2024 مكتب عبد الرحمن عبد الله الحربي للمحاماة. جميع الحقوق محفوظة.</p>
    </footer>
  );
}



export default ArabicApp;
