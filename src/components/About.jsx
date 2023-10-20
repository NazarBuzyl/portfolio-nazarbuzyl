import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { SectionHeader } from "./index";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader name="About me" />
      <div>
        <p className="mb-3">
          I began my coding journey with{" "}
          <span className="font-medium">C++</span> as my first programming
          language. In 2021, I embarked on a mission to discover my passion
          within the realm of programming. I enrolled in coding courses and
          delved into the world of{" "}
          <span className="font-medium">front-end web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          art of problem-solving and witnessing the tangible outcomes of my
          efforts. I <span className="underline">love</span> the moment when I
          crack a challenging problem and witness the transformation of a
          project from concept to a stunning reality. My primary tech stack
          revolves around <span className="font-medium">React and Node.js</span>
          , and I'm also familiar with{" "}
          <span className="font-medium">TypeScript and Tailwind</span>. I am
          always eager to learn new technologies.{" "}
          <span className="italic">
            I have a strong desire to pursue a bachelor's degree in computer
            science in the future.
          </span>
        </p>
        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games and watching movies. I also have a passion for{" "}
          <span className="font-medium">learning new things</span>. I'm
          currently diving into{" "}
          <span className="font-medium">psychology and philosophy</span>, and
          I'm also learning how to play the piano.
        </p>
      </div>
    </motion.section>
  );
}
