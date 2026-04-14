import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3yx8z6y', 'template_rzjy7wl', form.current, {
      publicKey: 'foMuZCYtoVTsEePVu',
    });
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-label inview">
          <span className="section-label__title">Contact</span>
          <span className="section-label__number">08</span>
        </div>
        <div className="section-line"><div className="section-line__grow"></div></div>

        <h2 className="heading-display">
          <span className="reveal-text inview"><span>Let's Talk Business</span></span>
          <span className="reveal-text inview"><span className="alt">Or Just Say Hello.</span></span>
        </h2>

        <div className="contact__grid">
          <div className="contact__info inview">
            <div className="contact__info-item">
              <span className="contact__info-label">Email</span>
              <a href="mailto:luckykanti31122006@gmail.com" className="contact__info-value">
                luckykanti31122006@gmail.com ↗
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">WhatsApp</span>
              <a href="https://api.whatsapp.com/send?phone=7425875484&text=Hello Lacki Lohar, I would like to connect with you." className="contact__info-value" target="_blank" rel="noopener noreferrer">
                (+91) 7425875484 ↗
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">Schedule</span>
              <a href="https://cal.com/lucky-panchal-qckdio" className="contact__info-value" target="_blank" rel="noopener noreferrer">
                Book a meeting ↗
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form inview">
            <div className="contact__field">
              <label className="contact__label">Name</label>
              <input type="text" name="name" className="contact__input" placeholder="Your name" required />
            </div>
            <div className="contact__field">
              <label className="contact__label">Email</label>
              <input type="email" name="email" className="contact__input" placeholder="your@email.com" required />
            </div>
            <div className="contact__field contact__field--area">
              <label className="contact__label">Message</label>
              <textarea name="message" className="contact__input" placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn--primary">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
