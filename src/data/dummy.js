import React from "react";
import { FaReact } from "react-icons/fa";
import buzylBlog from "./buzyl-blog.png";
import pizzaReactProject from "./pizza-react-project.png";
import reactDashboardProject from "./react-dashboard-project.png";
import portrait from "./portrait.jpg";

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

export const introData = {
  name: "Nazar",
  position: "front-end developer",
  experienceYears: new Date().getFullYear() - 2021,
  imageUrl: portrait,
  linkedin: "",
  github: "https://github.com/NazarBuzyl",
};

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Freelance",
    description:
      "I worked as a front-end developer for 3 mounth in freelancer team. I upskilled my knowledge in React and refined my skills in refactoring code from jQuery to JavaScript.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
];

export const projectsData = [
  {
    title: "Pizza Project",
    description:
      "I worked as a front-end developer on this project. Users can browse, display, and order pizzas. The website also includes search functionality by name, filtering options by category, as well as sorting by price and name.",
    tags: ["React", "Redux", "TypeScript"],
    siteUrl: "https://pizza-react-project.vercel.app/",
    imageUrl: pizzaReactProject,
    frontendUrl: "https://github.com/NazarBuzyl/pizza-react-project",
  },
  {
    title: "Buzyl Blog",
    description:
      "I worked as a full-stack developer on this project. Users can set up and log into their accounts, create posts, view posts created by others, and update their profiles.",
    tags: ["React", "Redux", "Express", "MongoDB"],
    siteUrl: "https://buzyl-blog-frontend.vercel.app/",
    imageUrl: buzylBlog,
    backendUrl: "https://github.com/NazarBuzyl/buzyl-blog-backend",
    frontendUrl: "https://github.com/NazarBuzyl/buzyl-blog-frontend",
  },
  {
    title: "Dashboard Project",
    description:
      "I worked as a front-end developer on this project to upskill my knowledge in Tailwind CSS, using the Syncfusion library.",
    tags: ["React", "Redux", "Tailwind"],
    siteUrl: "https://react-dashboard-project-nu.vercel.app/",
    imageUrl: reactDashboardProject,
    frontendUrl: "https://github.com/NazarBuzyl/react-dashboard-project",
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
