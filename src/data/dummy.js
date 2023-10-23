import React from "react";
import { FaReact } from "react-icons/fa";
import buzylBlog from "./buzyl-blog.png";
import pizzaReactProject from "./pizza-react-project.png";
import reactDashboardProject from "./react-dashboard-project.png";
import portrait from "./portrait.jpg";

export const metadata = {
  title: "Nazar Buzyl | Personal Portfolio",
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

export const supportedLanguages = ["en", "de", "ru", "ua"];

export const sectionsTitelsData = {
  about: {
    en: "About me",
    de: "Über mich",
    ru: "О себе",
    ua: "Про мене",
  },
  projects: {
    en: "My Projects",
    de: "Meine Projekte",
    ru: "Мои проекты",
    ua: "Мої проекти",
  },
  skills: {
    en: "My Skills",
    de: "Meine Fähigkeiten",
    ru: "Мои навыки",
    ua: "Мої навички",
  },
  experience: {
    en: "My Experience",
    de: "Meine Erfahrung",
    ru: "Мой опыт",
    ua: "Мій досвід",
  },
  contact: {
    en: "Contact Me",
    de: "Kontaktieren Sie mich",
    ru: "Свяжитесь со мной",
    ua: "Зв'яжіться зі мною",
  },
};

export const introData = {
  name: {
    en: "Nazar Buzyl",
    de: "Nazar Buzyl",
    ru: "Назарс Бузыль",
    ua: "Назар Бузиль",
  },
  position: {
    en: "front-end developer",
    de: "Front-End-Entwickler",
    ru: "фронтенд-разработчик",
    ua: "фронтенд-розробник",
  },
  experienceYears: new Date().getFullYear() - 2021,
  imageUrl: portrait,
  linkedin: "",
  github: "https://github.com/NazarBuzyl",
};

export const experiencesData = {
  en: [
    {
      title: "Front-End Developer",
      location: "Freelance",
      description:
        "I worked as a front-end developer for 3 months in a freelance team. I upskilled my knowledge in React and refined my skills in refactoring code from jQuery to JavaScript.",
      icon: React.createElement(FaReact),
      date: "2022",
    },
  ],
  de: [
    {
      title: "Front-End Entwickler",
      location: "Freelancer",
      description:
        "Ich habe als Front-End Entwickler 3 Monate lang in einem Freelancer-Team gearbeitet. Ich habe meine Kenntnisse in React erweitert und meine Fähigkeiten in der Code-Refaktorierung von jQuery zu JavaScript verbessert.",
      icon: React.createElement(FaReact),
      date: "2022",
    },
  ],
  ru: [
    {
      title: "Фронт-енд разработчик",
      location: "Фриланс",
      description:
        "Я работал в качестве фронт-енд разработчика 3 месяца в команде фрилансеров. Я повысил свои навыки в React и усовершенствовал навыки рефакторинга кода с jQuery на JavaScript.",
      icon: React.createElement(FaReact),
      date: "2022",
    },
  ],
  ua: [
    {
      title: "Фронт-енд розробник",
      location: "Фріланс",
      description:
        "Я працював як фронт-енд розробник протягом 3 місяців у команді фрілансерів. Я підвищив свої знання в React і вдосконалив навички рефакторингу коду з jQuery на JavaScript.",
      icon: React.createElement(FaReact),
      date: "2022",
    },
  ],
};

export const projectsData = [
  {
    title: "Pizza Project",
    description: {
      en: "I worked as a front-end developer on this project. Users can browse, display, and order pizzas. The website also includes search functionality by name, filtering options by category, as well as sorting by price and name.",
      de: "Ich habe als Front-End-Entwickler an diesem Projekt gearbeitet. Benutzer können Pizzen durchsuchen, anzeigen und bestellen. Die Website bietet auch Suchfunktionen nach Namen, Filtermöglichkeiten nach Kategorie sowie Sortieren nach Preis und Namen.",
      ru: "Я работал над этим проектом в качестве фронт-энд разработчика. Пользователи могут просматривать, отображать и заказывать пиццу. Сайт также включает функцию поиска по имени, опции фильтрации по категории, а также сортировку по цене и имени.",
      ua: "Я працював над цим проєктом як фронт-енд розробник. Користувачі можуть переглядати, відображати та замовляти піццу. Сайт також включає функціонал пошуку за іменем, можливості фільтрації за категорією, а також сортування за ціною та іменем.",
    },
    tags: ["React", "Redux", "TypeScript"],
    siteUrl: "https://pizza-react-project.vercel.app/",
    imageUrl: pizzaReactProject,
    frontendUrl: "https://github.com/NazarBuzyl/pizza-react-project",
  },
  {
    title: "Buzyl Blog",
    description: {
      en: "I worked as a full-stack developer on this project. Users can set up and log into their accounts, create posts, view posts created by others, and update their profiles.",
      de: "Ich habe als Full-Stack-Entwickler an diesem Projekt gearbeitet. Benutzer können ihre Konten einrichten und sich anmelden, Beiträge erstellen, Beiträge anzeigen, die von anderen erstellt wurden, und ihre Profile aktualisieren.",
      ru: "Я работал над этим проектом в качестве фулл-стек разработчика. Пользователи могут настраивать и входить в свои аккаунты, создавать сообщения, просматривать сообщения, созданные другими, и обновлять свои профили.",
      ua: "Я працював над цим проєктом як фулл-стек розробник. Користувачі можуть налаштовувати та входити в свої облікові записи, створювати повідомлення, переглядати повідомлення, створені іншими, та оновлювати свої профілі.",
    },
    tags: ["React", "Redux", "Express", "MongoDB"],
    siteUrl: "https://buzyl-blog-frontend.vercel.app/",
    imageUrl: buzylBlog,
    backendUrl: "https://github.com/NazarBuzyl/buzyl-blog-backend",
    frontendUrl: "https://github.com/NazarBuzyl/buzyl-blog-frontend",
  },
  {
    title: "Dashboard Project",
    description: {
      en: "I worked as a front-end developer on this project to upskill my knowledge in Tailwind CSS, using the Syncfusion library.",
      de: "Ich habe als Front-End-Entwickler an diesem Projekt gearbeitet, um meine Kenntnisse in Tailwind CSS unter Verwendung der Syncfusion-Bibliothek zu erweitern.",
      ru: "Я работал над этим проектом в качестве фронт-энд разработчика, чтобы повысить свои навыки в Tailwind CSS, используя библиотеку Syncfusion.",
      ua: "Я працював над цим проєктом як фронт-енд розробник, щоб покращити свої знання з Tailwind CSS, використовуючи бібліотеку Syncfusion.",
    },
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
  "SCSS",
  "BEM",
  "Git",
  "React",
  "Redux",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Express",
];
