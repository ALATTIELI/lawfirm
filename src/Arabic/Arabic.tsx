import React from "react";
import "../App.css";

function ArabicApp({ toggleLanguage }) {
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
        <div className="logo">
        <img src="./src/assets/logo.png" alt="Law Firm Logo" />
        <h1> عبدالرحمن عبدالله الحربي للمحاماة والاستشارات القانونية </h1>
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
          <button onClick={toggleLanguage}>English</button>
        </li>
        <a
          href={`https://wa.me/${+97126330061}`}
          className="whatsapp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
             Contact via WhatsApp
        </a>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header id="home">
      <h2>شعارنا</h2>
      <p>اتقان العمل </p>
      <p> امانة الأداء</p>
      <p>دقة المتابعة</p>
      <h2>هدفنا</h2>
      <p>حماية حقوق موكلينا </p>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>من نحن</h2>
      <p>مكتبنا يخدم المجتمع لأكثر من 20 عامًا...</p>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="common-container">
        <h2>خدماتنا</h2>
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
      <h2>اتصل بنا</h2>

      {/* معلومات الاتصال */}
      <div className="contact-info">
        <h3>معلومات الاتصال</h3>
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
