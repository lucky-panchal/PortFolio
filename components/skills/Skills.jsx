// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
import Coursework from './Coursework';
import './skills.css'
import { useTranslation } from '../../src/hooks/useTranslation.jsx';


const Skills = () => {
  const { t } = useTranslation();
  

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t('skillsTitle')}</h2>
      <span className="section__subtitle">{t('skillsSubtitle')}</span>

      <div className="skills__container container grid">
        <Frontend />
        <Coursework />
      </div>
    </section>
  )
}

export default Skills
