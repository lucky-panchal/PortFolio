/* eslint-disable no-unused-vars */
import React from 'react';
import "./work.css";
import EnhancedWorks from './EnhancedWorks';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const Work = () => {
  const { t } = useTranslation();
  
  return (
    <section className="work section projects" id='projects'>
        <h2 className="section__title section-title">{t('projectsTitle')} 🧑🏻💻</h2>
        <span className="section__subtitle">{t('projectsSubtitle')}</span>

        <EnhancedWorks />
    </section>
  )
}


export default Work
