/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';
import Certificate from "../../src/assets/Certificate1.pdf"


const Experience = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Experience 💼</h2>
            <span className="section__subtitle">What I work as</span>

            <div className="exp__container grid">
                
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
                        <h3 className="exp__title">Virtual <br />Internship</h3>
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

                            <a
                                download=""
                                href={Certificate}
                                className="button button--flex exp__download-button"
                            >
                                Download Certificate
                                <svg
                                    className="button__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                        fill="var(--container-color)"
                                    ></path>
                                    <path
                                        d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                        fill="var(--container-color)"
                                    ></path>
                                    <path
                                        d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                        fill="var(--container-color)"
                                    ></path>
                                    <path
                                        d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                        fill="var(--container-color)"
                                    ></path>
                                </svg>
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience