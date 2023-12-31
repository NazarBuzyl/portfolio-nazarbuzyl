"use client";

import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiCodeAlt, BiServer, BiLink } from "react-icons/bi";
import { useStateContext } from "../contexts/ContextProvider";

const Project = ({
  title,
  description,
  tags,
  siteUrl,
  imageUrl,
  backendUrl,
  frontendUrl,
}) => {
  const ref = useRef(null);
  const { languageMode } = useStateContext();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="pt-4 pb-7 px-5 sm:p-0 bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="sm:pl-10 sm:pr-2 sm:pt-8 sm:pb-2 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[16rem]">
          <a
            href={siteUrl}
            className="text-2xl gap-2 font-semibold flex items-center kursor-pointer hover:scale-[1.05] "
          >
            {title}
            <BiLink />
          </a>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description[languageMode]}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <LazyLoadImage
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-12 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
        />

        <div className="sm:absolute flex sm:flex-row-reverse bottom-2 right-2 group-even:left-2 group-even:flex-row">
          {backendUrl && (
            <a
              className="pl-0 pb-0 pt-4 pr-4 sm:pl-4 sm:pb-4 text-gray-700 flex items-center text-[1.45rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
              href={backendUrl}
            >
              <BiServer />
            </a>
          )}
          {frontendUrl && (
            <a
              className="pl-0 pb-0 pt-4 pr-4 sm:pl-4 sm:pb-4 text-gray-700 flex items-center text-[1.45rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
              href={frontendUrl}
            >
              <BiCodeAlt />
            </a>
          )}
        </div>
      </section>
    </motion.div>
  );
};
export default Project;
