// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const Frontend = () => {
  const { t } = useTranslation();
  
  return (
        <div className="skills__content skill">
            <div className="skills__floating-particles">
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
            </div>
            <h3 className="skills__title">{t('frontendTitle')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bxl-html5'></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">{t('intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxl-css3' ></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">{t('advanced')}</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bxl-javascript' ></i>


                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">{t('intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxs-data'></i>

                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">{t('intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxl-typescript'></i>

                        <div>
                            <h3 className="skills__name">TypeScript</h3>
                            <span className="skills__level">{t('basic')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bxl-bootstrap' ></i>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">{t('basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxl-git' ></i>

                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">{t('advanced')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxl-react' ></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">{t('intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxl-nodejs' ></i>

                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">{t('advanced')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bxl-tailwind-css' ></i>

                        <div>
                            <h3 className="skills__name">Tailwind CSS</h3>
                            <span className="skills__level">{t('basic')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Frontend
