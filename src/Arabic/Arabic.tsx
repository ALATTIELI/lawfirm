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
      <h1>مكتب عبدالرحمن عبدالله الحربي للمحاماة والاستشارات القانونية </h1>
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
      <h2>خدماتنا</h2>
      <ul>
        <p>
          القضايا المدنية بكافة أنواعها بما تشمله من تقديم المساعدة القانونية
          لحماية الحقوق والممتلكات العقارية لعملاء المكتب{" "}
        </p>
        <p>
          القضايا التجارية بكافة أنواعها تشمله من منازعات اعمال البنوك ومنازعات
          عقود المقاولات والمطالبات المالية الناتجة من توريد البضائع والاعمال
          والخدمات{" "}
        </p>
        <p>
          القضايا الجزائية بما تنطوي عليه من مرافعات جزائية امام مختلف درجات
          المحاكم وتمثيل عملاء المكتب امام مراكز الشرطة والنيابات{" "}
        </p>
        <p>تمثيل عملائنا في قضايا الأحوال الشخصية </p>
        <p>اعمال تأسيس الشركات </p>
        <p>
          توثيق عقود الشركات وتعديلاتها وملاحقها بما للمكتب من رجعية التوثيق
          الصادرة من دائرة التنمية الاقتصادية في ابوظبي{" "}
        </p>
        <p>تمثيل عملاء المكتب في قضايا التحكيم </p>
        <p>تنفيذ الاحكام وتحصيل الديون </p>
        <p>
          تقديم الاستشارات القانونية للأفراد والشركات وصياغة العقود والاتفاقيات
          تنظيماً لتعاملاتهم المالية توقياً واتقاء للتقاضي وتهيئه لشروط تقاضي
          محكمة على فرض وقوعه{" "}
        </p>
        <p>
          المنازعات العمالية بما تشمل من تقديم الاستشارات القانونية لأصحاب العمل
          و الموظفين تطبيقاً لقانون العمل{" "}
        </p>
        <p>
          متابعة القضايا خارج الدولة بالشراكة والتنسيق مع مكاتب المحاماة الإقليم{" "}
        </p>
        <p>منازعات التامين على الحوادث والأخطار المؤمن عليها </p>
      </ul>
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

      {/* نموذج الاستدعاء */}
      <div className="callback-form">
        <h3>طلب مكالمة</h3>
        <form>
          <div className="input-group">
            <label>الاسم:</label>
            <input type="text" name="name" required />
          </div>
          <div className="input-group">
            <label>رقم الهاتف:</label>
            <input type="tel" name="phone" required />
          </div>
          <div className="input-group">
            <label>الرسالة:</label>
            <textarea name="message" rows={4} required></textarea>
          </div>
          <button type="submit">إرسال</button>
        </form>
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
