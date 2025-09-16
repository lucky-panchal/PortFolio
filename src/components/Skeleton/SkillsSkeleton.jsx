import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const SkillsSkeleton = () => {
  return (
    <section className="skills section">
      <SkeletonLoader type="skeleton-text title" width="150px" />
      <SkeletonLoader type="skeleton-text" width="250px" />

      <div className="skills__container container grid">
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i} className="skills__content">
            <div className="skills__header">
              <SkeletonLoader type="skeleton-avatar" width="40px" height="40px" />
              <div>
                <SkeletonLoader type="skeleton-text large" width="200px" />
                <SkeletonLoader type="skeleton-text small" width="150px" />
              </div>
            </div>

            <div className="skills__list grid">
              {Array.from({ length: 6 }, (_, j) => (
                <div key={j} className="skills__data">
                  <div className="skills__titles">
                    <SkeletonLoader type="skeleton-text" width="100px" />
                    <SkeletonLoader type="skeleton-text small" width="40px" />
                  </div>
                  <div className="skills__bar">
                    <SkeletonLoader type="skeleton-text" height="6px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSkeleton;