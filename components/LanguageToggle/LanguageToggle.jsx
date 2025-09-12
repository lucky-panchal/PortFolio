import React from 'react';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  
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