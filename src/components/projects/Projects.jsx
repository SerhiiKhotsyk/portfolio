import styles from './Projects.module.css';
import project1 from '../../assets/images/projects/mui-layout-project.jpg';
import project2 from '../../assets/images/projects/react-pizza.jpg';
import project3 from '../../assets/images/projects/project-3.jpg';
import project4 from '../../assets/images/projects/project-4.jpg';
import project5 from '../../assets/images/projects/project-5.jpg';
import project6 from '../../assets/images/projects/project-6.jpg';
import Project from './Project/Project';
import { forwardRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'MUI layout',
    img: project1,
    linkPreview: 'https://serhiikhotsyk.github.io/mui-layout/',
    linkGithub: 'https://github.com/SerhiiKhotsyk/mui-layout',
    stack: 'HTML , JavaScript,  React,  MUI 5',
    descr: 'MUI layout description',
  },
  {
    id: 2,
    title: 'React Pizza',
    img: project2,
    linkPreview: 'https://serhiikhotsyk.github.io/react-pizza/',
    linkGithub: 'https://github.com/SerhiiKhotsyk/react-pizza',
    stack: 'TypeScript, SASS, React, Axios, React Router v6, Redux Toolkit, React Hooks',
    descr: 'React Pizza layout description',
  },
  {
    id: 3,
    title: 'Project Tile goes here',
    img: project3,
    linkPreview: '#',
    linkGithub: '#',
    stack: 'HTML , JavaScript, SASS, React',
    descr:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content scription This is sample project lorem ipsum',
  },
  // {
  //   id: 4,
  //   title: 'Project Tile goes here',
  //   img: project4,
  //   linkPreview: '#',
  //   linkGithub: '#',
  //   stack: 'HTML , JavaScript, SASS, React',
  //   descr:
  //     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  // },
  // {
  //   id: 5,
  //   title: 'Project Tile goes here',
  //   img: project5,
  //   linkPreview: '#',
  //   linkGithub: '#',
  //   stack: 'HTML , JavaScript, SASS, React',
  //   descr:
  //     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content scription This is sample project lorem ipsum rator for dummy content scription This is s ',
  // },
  // {
  //   id: 6,
  //   title: 'Project Tile goes here',
  //   img: project6,
  //   linkPreview: '#',
  //   linkGithub: '#',
  //   stack: 'HTML , JavaScript, SASS, React',
  //   descr:
  //     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content scription This is sample project lorem ipsum',
  // },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section className={styles.projects} ref={ref}>
      <h5>
        projects<span>()</span>
      </h5>
      <div className={styles.projects__container}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
});

// const Projects = () => {
//   return (
//     <section className={styles.projects}>
//       <h5>projects<span>()</span></h5>
//       <div className={styles.projects__container}>
//         {projects.map(project => <Project key={project.id} project={project} />)}
//       </div>
//     </section>
//   );
// }

export default Projects;
