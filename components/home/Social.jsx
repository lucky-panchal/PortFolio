// eslint-disable-next-line no-unused-vars
import React from 'react'
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const Social = () => {
  const { t } = useTranslation();
  
  return (
    <div className="home__social">
        <div className="mobile-language-toggle">
            <LanguageToggle />
        </div>
        
        <a href="https://www.instagram.com/luckyp4nch4l/" className="home__social-icon instagram" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-instagram"></i>
            <span className="social-tooltip">{t('instagram')}</span>
        </a>

        <a href="https://github.com/lucky-panchal" className="home__social-icon github" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
            <span className="social-tooltip">{t('github')}</span>
        </a>

        <a href="https://linkedin.com/in/lacki-lohar-463a23321" className="home__social-icon linkedin" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin"></i>
            <span className="social-tooltip">{t('linkedin')}</span>
        </a>
    </div>
  )
}

export default Social
