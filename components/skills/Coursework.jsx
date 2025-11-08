import { useTranslation } from '../../src/hooks/useTranslation.jsx';


 const Coursework = () => {
    const { t } = useTranslation();
    
    return (
        <div className="skills__content skill">
            <div className="skills__floating-particles">
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
            </div>
            <h3 className="skills__title">{t('courseworkTitle')}</h3>

  <div className="skills__box">
    <div className="skills__group">
      <div className="skills__data">
        <i className='bx bxl-python'></i>
        <div>
          <h3 className="skills__name">Python</h3>
          <span className="skills__level">{t('intermediate')}</span>
        </div>
      </div>

      <div className="skills__data">
        <i className='bx bxl-c-plus-plus'></i>
        <div>
          <h3 className="skills__name">C++</h3>
          <span className="skills__level">{t('advanced')}</span>
        </div>
      </div>

      <div className="skills__data">
        <i className='bx bxl-java'></i>
        <div>
          <h3 className="skills__name">Java</h3>
          <span className="skills__level">{t('basic')}</span>
        </div>
      </div>

      <div className="skills__data">
        <i className='bx bxs-cog'></i>
        <div>
          <h3 className="skills__name">Operating Systems</h3>
          <span className="skills__level">{t('intermediate')}</span>
        </div>
      </div>

      <div className="skills__data">
        <i className='bx bx-layer'></i>
        <div>
          <h3 className="skills__name">OOPs</h3>
          <span className="skills__level">{t('intermediate')}</span>
        </div>
      </div>
    </div>

    <div className="skills__group">
      <div className="skills__data">
        <i className='bx bxl-github'></i>
        <div>
          <h3 className="skills__name">GitHub</h3>
          <span className="skills__level">{t('advanced')}</span>
        </div>
      </div>

      <div className="skills__data">
        <i className='bx bxl-visual-studio'></i>
        <div>
          <h3 className="skills__name">VS Code</h3>
          <span className="skills__level">{t('intermediate')}</span>
        </div>
      </div>

      <div className="skills__data">
        <i className='bx bxl-figma'></i>
        <div>
          <h3 className="skills__name">Figma</h3>
          <span className="skills__level">{t('intermediate')}</span>
        </div>
      </div>

      <div className="skills__data">
    <i className='bx bxs-data'></i>
    <div>
        <h3 className="skills__name">DBMS</h3>
        <span className="skills__level">{t('intermediate')}</span>
    </div>
</div>


      <div className="skills__data">
        <i className='bx bx-bug'></i>
        <div>
          <h3 className="skills__name">VS Code Debugging</h3>
          <span className="skills__level">{t('intermediate')}</span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Coursework
