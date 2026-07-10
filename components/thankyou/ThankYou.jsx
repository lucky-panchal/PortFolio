import React from 'react';
import './thankyou.css';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';
import { KineticText } from '../../src/components/ui/kinetic-text';
import { TypingAnimation } from '../../src/components/ui/typing-animation';
import { NoiseTexture } from '../../src/components/ui/noise-texture';

const ThankYou = () => {
  const { language } = useTranslation();

  const titleText = language === 'hi' 
    ? 'आने के लिए धन्यवाद!' 
    : 'Thank You for Visiting!';

  const subtitleText = language === 'hi'
    ? 'जल्द ही आपके साथ सहयोग करने की आशा है। आपका दिन शुभ हो!'
    : 'Hope to collaborate with you soon. Have a wonderful day!';

  return (
    <section className="thankyou section" id="thankyou">
      {/* Background Noise Texture */}
      <NoiseTexture opacity={0.06} />

      <div className="thankyou__container container">
        <div className="section-label inview">
          <span className="section-label__title">Thank You</span>
          <span className="section-label__number">08</span>
        </div>
        <div className="section-line"><div className="section-line__grow"></div></div>

        <div className="thankyou__content inview">
          <h2 className="thankyou__title">
            <KineticText>{titleText}</KineticText>
          </h2>
          <p className="thankyou__subtitle">
            <TypingAnimation text={subtitleText} speed={40} delay={600} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
