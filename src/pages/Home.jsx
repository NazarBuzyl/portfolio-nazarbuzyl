import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Intro,
  About,
  Skills,
  SectionDivider,
  Projects,
  Experience,
  Contact,
} from "../components/index";
import { sectionsTitelsData, supportedLanguages } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { language } = useParams();
  const { setLanguageMode, languageMode } = useStateContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (supportedLanguages.includes(language)) {
      setLanguageMode(language);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About title={sectionsTitelsData.about[languageMode]} />
      <Projects title={sectionsTitelsData.projects[languageMode]} />
      <Skills title={sectionsTitelsData.skills[languageMode]} />
      <Experience title={sectionsTitelsData.experience[languageMode]} />
      <Contact title={sectionsTitelsData.contact[languageMode]} />
    </div>
  );
};

export default Home;
