import React, { useState } from 'react';
import './experience.css';
import Certificate from '../../src/assets/Certificate1.pdf';
import HackImg1 from '../../src/assets/IMG20260403235704.jpg';
import HackImg2 from '../../src/assets/rai_university_ahmedabad_14050121_172507316.jpg.jpeg';
import HackCert from '../../src/assets/IMG-20260414-WA0014.jpg';

const experiences = [
  {
    id: 1,
    role: 'B.Tech Student (CSE)',
    company: 'Rai University, Ahmedabad',
    period: "Jun'24 — Present",
    icon: 'uil uil-graduation-cap',
    details: [
      'Pursuing Bachelor of Technology in Computer Science',
      'Building full-stack applications with MERN Stack',
      'Creating UI interfaces and UX interactions',
      'Version Control System specialist',
    ],
  },
  {
    id: 2,
    role: 'Virtual Internship',
    company: 'AICTE — Eduskills',
    period: "Apr'25 — Jun'25",
    icon: 'uil uil-briefcase-alt',
    details: [
      'Google for Developers Verified Certificate',
      'Data preprocessing and model evaluation',
      'Machine learning fundamentals',
    ],
    certificate: Certificate,
  },
  {
    id: 3,
    role: '🏆 1st Place — DefenceTech Domain',
    company: 'Gandhinagar University Hackathon · Team codeXlearner',
    period: '3rd — 4th April 2026',
    icon: 'uil uil-trophy',
    details: [
      '36 hours. No sleep. Built under pressure from scratch.',
      'Project: Secure Military Communications Monitoring',
      'Real-time anomaly detection — jamming & spoofing using hybrid AI + rule-based approach',
      'Secured 1st Rank in DefenceTech domain at Gandhinagar University Hackathon',
      'Recognized by Rai University on official social media',
    ],
    images: [HackImg1, HackImg2],
    hackCert: HackCert,
    certificateSoon: false,
  },
];

const Experience = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-label inview">
          <span className="section-label__title">Experience</span>
          <span className="section-label__number">03</span>
        </div>
        <div className="section-line"><div className="section-line__grow"></div></div>

        <h2 className="heading-display">
          <span className="reveal-text inview"><span>What I've</span></span>
          <span className="reveal-text inview"><span className="alt">Done So Far.</span></span>
        </h2>

        <div className="exp__list">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="exp__item inview" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="exp__item-header" onClick={() => setOpen(open === exp.id ? null : exp.id)}>
                <div className="exp__item-left">
                  <i className={exp.icon}></i>
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <span className="exp__company">{exp.company}</span>
                  </div>
                </div>
                <div className="exp__item-right">
                  <span className="exp__period">{exp.period}</span>
                  <i className={`uil ${open === exp.id ? 'uil-angle-up' : 'uil-angle-down'} exp__toggle`}></i>
                </div>
              </div>

              {open === exp.id && (
                <div className="exp__item-body">
                  <ul className="exp__details">
                    {exp.details.map((d, j) => (
                      <li key={j} className="exp__detail">
                        <i className="uil uil-check-circle"></i>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.images && (
                    <div className="exp__images">
                      {exp.images.map((img, j) => (
                        <div key={j} className="exp__image-wrap">
                          <img src={img} alt={`Hackathon moment ${j + 1}`} className="exp__image" />
                        </div>
                      ))}
                    </div>
                  )}
                  {exp.hackCert && (
                    <div className="exp__cert-section">
                      <span className="exp__cert-label">Certificate</span>
                      <div className="exp__cert-img-wrap">
                        <img src={exp.hackCert} alt="Hackathon Certificate" className="exp__cert-img" />
                      </div>
                      <a href={exp.hackCert} download="DefenceTech_Certificate.jpg" className="btn btn--primary exp__cert-btn">
                        Download Certificate ↓
                      </a>
                    </div>
                  )}
                  {exp.certificate && (
                    <a href={exp.certificate} download className="btn btn--outline exp__cert-btn">
                      Download Certificate ↓
                    </a>
                  )}
                  {exp.certificateSoon && (
                    <span className="exp__cert-soon">Certificate — Coming Soon</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
