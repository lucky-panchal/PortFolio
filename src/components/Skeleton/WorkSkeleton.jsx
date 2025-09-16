import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const WorkSkeleton = () => {
  return (
    <section className="work section">
      <SkeletonLoader type="skeleton-text title" width="180px" />
      <SkeletonLoader type="skeleton-text" width="280px" />

      <div className="work__container container">
        <div className="work__filters">
          {Array.from({ length: 3 }, (_, i) => (
            <SkeletonLoader key={i} type="skeleton-button" width="80px" />
          ))}
        </div>

        <div className="work__container grid">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="work__card skeleton-card">
              <SkeletonLoader type="skeleton-image" height="200px" />
              <div style={{ padding: '1rem' }}>
                <SkeletonLoader type="skeleton-text large" width="150px" />
                <SkeletonLoader type="skeleton-text" width="200px" />
                <SkeletonLoader type="skeleton-button" width="100px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSkeleton;