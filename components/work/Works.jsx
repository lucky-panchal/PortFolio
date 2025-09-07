/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';
import { useTranslation } from '../../src/hooks/useTranslation';

const Works = () => {
    const { language } = useTranslation();
    const[item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(item.name === "all" || item.name === "सभी") {
            setProjects(projectsData);
        } else {
          const categoryMap = {
            'app': 'app',
            'ऐप': 'app',
            'web': 'web',
            'वेब': 'web'
          };
          
          const mappedCategory = categoryMap[item.name] || item.name;
          
          const newProjects = projectsData.filter((project) => {
            return project.category === mappedCategory;
          });
          setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index, navItem) => {
        setItem({ name: navItem.name[language] });
        setActive(index);
    };
  return (
    <div>
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span onClick={(e) => {
                        handleClick(e, index, item);
                    }} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>{item.name[language]}</span>
                );
            })}
        </div>

        <div className="work__container container grid">
            {projects.map((item) => {
                return <WorksItems item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default Works