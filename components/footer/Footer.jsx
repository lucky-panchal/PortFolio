/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const Footer = () => {
  const { t, language } = useTranslation();
  
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;{language === 'hi' ? 'लक्की लौहार' : 'Lacki Lohar'}/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">{t('about')}</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">{t('skills')}</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">{t('testimonialsSubtitle')}</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/luckyp4nch4l/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; {language === 'hi' ? 'लक्की लौहार' : 'Lacki Lohar'}. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
