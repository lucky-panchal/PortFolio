import React from 'react';
import './Skeleton.css';

const SkeletonLoader = ({ type, width, height, count = 1, className = '' }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`skeleton ${type} ${className}`}
      style={{ width, height }}
    />
  ));

  return count === 1 ? skeletons[0] : <>{skeletons}</>;
};

export default SkeletonLoader;