import React from "react";
import { Intro, About, Skills, SectionDivider } from "../components/index";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Projects /> */}
      <Skills />
      {/* <Experience /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
