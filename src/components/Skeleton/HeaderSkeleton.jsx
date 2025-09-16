import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const HeaderSkeleton = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <SkeletonLoader type="skeleton-text" width="150px" height="30px" />
        
        <div className="nav__menu">
          <ul className="nav__list grid">
            {Array.from({ length: 8 }, (_, i) => (
              <li key={i} className="nav__item">
                <SkeletonLoader type="skeleton-nav-item" />
              </li>
            ))}
          </ul>
        </div>
        
        <SkeletonLoader type="skeleton-button" width="40px" height="40px" />
      </nav>
    </header>
  );
};

export default HeaderSkeleton;