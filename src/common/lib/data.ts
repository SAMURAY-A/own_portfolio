import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
// import carcatalogImg from '@/../public/images/car-catalog.png';
// import filedriveImg from '@/../public/images/file-drive.png';
// import projectmanagementImg from '@/../public/images/project-management.png';
// import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'START',
    location: `Fergana, Uzbegistan`,
    description: `I completed the main programming courses, building a strong foundation in C and Python languages. I mastered programming concepts and began developing software solutions.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2023 - Present',
  },
  {
    title: 'full-stack',
    location: 'Fergana, Uzbegistan',
    description: `Started learning Node.js and Next.js technologies, gaining experience as a junior backend developer while also mastering frontend development. 
`,
    icon: React.createElement(BookIcon),
    date: 'Sep 2022 - Present',
  },

] as const;

export const images = {
  // campwithusImg,
  // carcatalogImg,
  // filedriveImg,
  // projectmanagementImg,
  // reactfoodImg,
};

export const projectsData = [
  {
    title: 'educational centers',
    description:
      'The backend part of the ERP system for educational centers provides the following features: teachers can upload lesson videos, students can watch these videos, and submit their assignments to the system.',
    tags: [
      // 'React',
      'TypeScript',
      'PostgreSQL'
    ],
    // imageUrl: filedriveImg,
    link: 'https://github.com/SAMURAY-A/oquv_markaz',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['Docker', '/svgs/Docker.svg'],
['React', '/svgs/react.svg'],
['Next.js', '/svgs/nextjs.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
