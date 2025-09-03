// eslint-disable-next-line no-unused-vars
import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/luckyp4nch4l/" className="home__social-icon instagram" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-instagram"></i>
            <span className="social-tooltip">Instagram</span>
        </a>

        <a href="https://github.com/lucky-panchal" className="home__social-icon github" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
            <span className="social-tooltip">GitHub</span>
        </a>

        <a href="https://linkedin.com/in/lacki-lohar-463a23321" className="home__social-icon linkedin" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin"></i>
            <span className="social-tooltip">LinkedIn</span>
        </a>
    </div>
  )
}

export default Social