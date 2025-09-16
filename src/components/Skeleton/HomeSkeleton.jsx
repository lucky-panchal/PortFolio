import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const HomeSkeleton = () => {
  return (
    <section className="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social skeleton-social">
            <SkeletonLoader type="skeleton-social-icon" count={4} />
          </div>

          <div className="home__img-wrapper">
            <SkeletonLoader type="skeleton-profile" />
          </div>

          <div className="home__data skeleton-data">
            <SkeletonLoader type="skeleton-text title" width="300px" />
            <SkeletonLoader type="skeleton-text large" width="250px" />
            <SkeletonLoader type="skeleton-text" width="400px" count={3} />
            <SkeletonLoader type="skeleton-button" width="150px" />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <SkeletonLoader type="skeleton-text small" width="100px" />
        </div>
      </div>
    </section>
  );
};

export default HomeSkeleton;