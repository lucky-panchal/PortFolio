import React from 'react';
import HeaderSkeleton from './HeaderSkeleton';
import HomeSkeleton from './HomeSkeleton';
import AboutSkeleton from './AboutSkeleton';
import SkillsSkeleton from './SkillsSkeleton';
import WorkSkeleton from './WorkSkeleton';
import ContactSkeleton from './ContactSkeleton';
import './Skeleton.css';

const FullPageSkeleton = () => {
  return (
    <div className="skeleton-wrapper">
      <HeaderSkeleton />
      <main className="main">
        <HomeSkeleton />
        <AboutSkeleton />
        <SkillsSkeleton />
        <WorkSkeleton />
        <ContactSkeleton />
      </main>
    </div>
  );
};

export default FullPageSkeleton;