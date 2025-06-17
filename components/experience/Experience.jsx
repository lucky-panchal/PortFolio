/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Experience 💼</h2>
            <span className="section__subtitle">What I work as</span>

            <div className="exp__container container grid">
                <div className="exp__content">
                    <div>
                        <i className="uil uil-web-grid exp__icon"></i>
                        <h3 className="exp__title">As <br /> Student </h3>
                    </div>

                    <div>
                        <span className="exp__comp">Rai University,Ahmedabad. </span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                    <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">Pursuing My Bachelor Of Technology (CSE) at Rai University. <br /> Jun'24 - Present🧑🏻‍💻</h3>
                            <p className="exp__modal-description"></p>

                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">MERN-STACK.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">I create UI Interfaces.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">I create UX Element Interactions.</p>
                                </li>


                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">VCS Specialist.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="exp__content">
                    <div>
                        <i className="uil uil-arrow exp__icon"></i>
                        <h3 className="exp__title">Virtual <br/>Internship</h3>
                    </div>

                    <div>
                        <span className="exp__comp">AICTE-Eduskills.</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                    <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">Internship  <br /> Apr'25 - Jun'25</h3>
                            <p className="exp__modal-description">Gained knowledge as Intern for 2 months.
                            </p>

                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">Got <b>Google for developers</b> Verified Certificate</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">Understanding the importance of data preprocessing and model evaluation in building effective machine learning solutions.</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience