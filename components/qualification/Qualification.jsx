// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './qualification.css';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const Qualification = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{t('qualificationTitle')} 🧑🏻🎓</h2>
      <span className="section__subtitle">{t('qualificationSubtitle')} 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> {t('education')}
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Entry 1 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">{t('higherSecondary')}🧪</h3>
                <span className="qualification__subtitle">{t('rbseUdaipur')}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2024
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* Education Entry 2 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              

              <div>
                <h3 className="qualification__title">{t('bachelorTech')}🎓</h3>
                <span className="qualification__subtitle">{t('raiUniversity')}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - {t('present')} 
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
