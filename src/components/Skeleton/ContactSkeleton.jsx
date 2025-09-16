import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const ContactSkeleton = () => {
  return (
    <section className="contact section">
      <SkeletonLoader type="skeleton-text title" width="150px" />
      <SkeletonLoader type="skeleton-text" width="250px" />

      <div className="contact__container container grid">
        <div className="contact__content">
          <SkeletonLoader type="skeleton-text large" width="200px" />

          <div className="contact__info">
            {Array.from({ length: 2 }, (_, i) => (
              <div key={i} className="contact__card skeleton-card">
                <SkeletonLoader type="skeleton-avatar" width="50px" height="50px" />
                <SkeletonLoader type="skeleton-text" width="100px" />
                <SkeletonLoader type="skeleton-text small" width="150px" />
                <SkeletonLoader type="skeleton-button" width="120px" />
              </div>
            ))}
          </div>
        </div>

        <div className="contact__content">
          <SkeletonLoader type="skeleton-text large" width="180px" />

          <form className="contact__form">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="contact__form-div">
                <SkeletonLoader type="skeleton-text" height="60px" />
              </div>
            ))}
            <SkeletonLoader type="skeleton-button" width="150px" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;