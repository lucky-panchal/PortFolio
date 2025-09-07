import React from 'react';
import { useLanguage } from '../../src/contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
        EN
      </span>
      <span className="lang-divider">•</span>
      <span className={`lang-option ${language === 'hi' ? 'active' : ''}`}>
        हि
      </span>
    </button>
  );
};

export default LanguageToggle;
