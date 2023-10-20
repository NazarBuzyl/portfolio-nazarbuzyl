import React from "react";
import { FaReact } from "react-icons/fa";

export const metadata = {
  title: "Nazar | Personal Portfolio",
  description: "Nazar is a fron-end developer with 2 years of experience.",
};

export const sectionsData = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 3 mounth freelancer team. I upskilled my knowledge in React and refined my skills in refactoring code from jQuery to JavaScript.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
];

export const projectsData = [
  {
    title: "Pizza Project",
    description:
      "I worked as a front-end developer on this project. Users can browse, display, and order pizzas. The website also includes search functionality by name, filtering options by category, as well as sorting by price and name.",
    tags: ["React", "Redux"],
    imageUrl: "link",
  },
  {
    title: "Buzyl Blog",
    description:
      "I worked as a full-stack developer on this project. Users can set up and log into their accounts, create posts, view posts created by others, and update their profiles.",
    tags: ["React", "Redux", "Express", "MongoDB"],
    imageUrl: "imageLink",
  },
  {
    title: "Douschbord",
    description: ".",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: "imageLink",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "React",
  "Redux",
  "TypeScript",
  "Tailwind",
  "MongoDB",
  "Express",
];
