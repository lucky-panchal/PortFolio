import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const AboutSkeleton = () => {
  return (
    <section className="about section">
      <SkeletonLoader type="skeleton-text title" width="200px" />
      <SkeletonLoader type="skeleton-text" width="300px" />

      <div className="about__container container grid">
        <SkeletonLoader type="skeleton-image" width="350px" height="400px" />

        <div className="about__data">
          <div className="about__info grid">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="about__box skeleton-card">
                <SkeletonLoader type="skeleton-avatar" width="50px" height="50px" />
                <SkeletonLoader type="skeleton-text" width="120px" />
                <SkeletonLoader type="skeleton-text small" width="150px" />
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <SkeletonLoader type="skeleton-text" count={4} />
            <SkeletonLoader type="skeleton-button" width="180px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;