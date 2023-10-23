import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { introData } from "../data/dummy";
import { useSectionInView } from "../lib/hooks";
import { useStateContext } from "../contexts/ContextProvider";

const contactBtn = {
  en: "Contact Me",
  de: "Kontaktieren Sie mich",
  ru: "Свяжитесь со мной",
  ua: "Зв'яжіться зі мною",
};

const downloadCVBtn = {
  en: "Download CV",
  de: "Lebenslauf herunterladen",
  ru: "Скачать резюме",
  ua: "Завантажити Резюме",
};

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick, languageMode } =
    useStateContext();

  const mainIntroInfo = {
    en: (
      <>
        <span className="font-bold">
          Hello, I'm {introData.name[languageMode]}.
        </span>{" "}
        I'm a{" "}
        <span className="font-bold">{introData.position[languageMode]}</span>{" "}
        with{" "}
        <span className="font-bold">{introData.experienceYears} years</span> of
        experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is on{" "}
        <span className="underline">React</span>.
      </>
    ),
    de: (
      <>
        <span className="font-bold">
          Hallo, ich bin {introData.name[languageMode]}.
        </span>{" "}
        Ich bin ein{" "}
        <span className="font-bold">{introData.position[languageMode]}</span>{" "}
        mit{" "}
        <span className="font-bold">{introData.experienceYears} Jahren</span>{" "}
        Erfahrung. Ich baue gerne{" "}
        <span className="italic">Websites und Apps</span>. Mein Fokus liegt auf{" "}
        <span className="underline">React</span>.
      </>
    ),
    ru: (
      <>
        <span className="font-bold">
          Привет, я {introData.name[languageMode]}.
        </span>{" "}
        Я -{" "}
        <span className="font-bold">{introData.position[languageMode]}</span> с{" "}
        <span className="font-bold">{introData.experienceYears} годами</span>{" "}
        опыта. Мне нравится создавать{" "}
        <span className="italic">сайты и приложения</span>. Я сфокусированный на{" "}
        <span className="underline">React</span>.
      </>
    ),
    ua: (
      <>
        <span className="font-bold">
          Привіт, я {introData.name[languageMode]}.
        </span>{" "}
        Я -{" "}
        <span className="font-bold">{introData.position[languageMode]}</span> з{" "}
        <span className="font-bold">{introData.experienceYears} роками</span>{" "}
        досвіду. Мені подобається створювати{" "}
        <span className="italic">сайти та додатки</span>. Я сфокусований на{" "}
        <span className="underline">React</span>.
      </>
    ),
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <LazyLoadImage
              src={introData.imageUrl}
              alt={`${introData.name} portrait`}
              width="192"
              height="192"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {mainIntroInfo[languageMode]}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {contactBtn[languageMode]}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          {downloadCVBtn[languageMode]}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        {introData.linkedin && (
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={introData.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        )}
        {introData.github && (
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={introData.github}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        )}
      </motion.div>
    </section>
  );
};

export default Intro;
