import React from "react";

import { projectsData } from "../data/dummy";
import { useSectionInView } from "../lib/hooks";

import { Project, SectionHeader } from "./index";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader>My projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
