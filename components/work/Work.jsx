/* eslint-disable no-unused-vars */
import React from 'react';
import "./work.css";
import Works from './Works';
import { useTranslation } from '../../src/hooks/useTranslation';

const Work = () => {
  const { t } = useTranslation();
  
  return (
    <section className="work section" id='projects'>
        <h2 className="section__title">{t('projectsTitle')} 🧑🏻💻</h2>
        <span className="section__subtitle">{t('projectsSubtitle')}</span>

        <Works />
    </section>
  )
}

export default Work