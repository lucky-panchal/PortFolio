// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './qualification.css';

const Qualification = () => {
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
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personal Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
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
                <h3 className="qualification__title">Higher Secondary🧪</h3>
                <span className="qualification__subtitle">RBSE - Udaipur, Rajasthan</span>
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
                <h3 className="qualification__title">Bachelor of Technology🎓</h3>
                <span className="qualification__subtitle">Rai University - Ahmedabad, Gujarat</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
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