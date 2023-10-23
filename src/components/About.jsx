import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { SectionHeader } from "./index";
import { useStateContext } from "../contexts/ContextProvider";

const aboutData = {
  en: (
    <div>
      <p className="mb-3">
        I began my coding journey with <span className="font-medium">C++</span>{" "}
        as my first programming language. In 2021, I embarked on a mission to
        discover my passion within the realm of programming. I enrolled in
        coding courses and delved into the world of{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        art of problem-solving and witnessing the tangible outcomes of my
        efforts. I <span className="underline">love</span> the moment when I
        crack a challenging problem and witness the transformation of a project
        from concept to a stunning reality. My primary tech stack revolves
        around <span className="font-medium">React and Node.js</span>, and I'm
        also familiar with{" "}
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
        <span className="font-medium">learning new things</span>. I'm currently
        diving into{" "}
        <span className="font-medium">psychology and philosophy</span>, and I'm
        also learning how to play the piano.
      </p>
    </div>
  ),
  de: (
    <div>
      <p className="mb-3">
        Ich habe meine Programmierreise mit{" "}
        <span className="font-medium">C++</span> als meine erste
        Programmiersprache begonnen. Im Jahr 2021 habe ich mich auf eine Mission
        begeben, um meine Leidenschaft im Bereich der Programmierung zu
        entdecken. Ich habe Programmierkurse belegt und bin in die Welt der{" "}
        <span className="font-medium">Front-End-Webentwicklung</span>{" "}
        eingetaucht.{" "}
        <span className="italic">
          Der beste Teil der Programmierung für mich
        </span>
        ist die Kunst des Problemlösens und das Erleben der greifbaren
        Ergebnisse meiner Bemühungen. Ich <span className="underline">mag</span>{" "}
        den Moment, in dem ich ein kniffliges Problem knacke und die Verwandlung
        eines Projekts vom Konzept zur Realität beobachte. Mein
        Haupttechnologie-Stack dreht sich um{" "}
        <span className="font-medium">React und Node.js</span>, und ich bin auch
        mit <span className="font-medium">TypeScript und Tailwind</span>{" "}
        vertraut. Ich bin immer bereit, neue Technologien zu lernen.{" "}
        <span className="italic">
          Ich hege einen starken Wunsch, in Zukunft einen Bachelor-Abschluss in
          Informatik zu machen.
        </span>
      </p>
      <p>
        <span className="italic">Wenn ich nicht programmiere</span>, spiele ich
        gerne Videospiele und schaue Filme. Ich habe auch eine Leidenschaft für
        das <span className="font-medium">Lernen neuer Dinge</span>. Ich tauche
        derzeit in die Bereiche{" "}
        <span className="font-medium">Psychologie und Philosophie</span> ein und
        lerne außerdem, Klavier zu spielen.
      </p>
    </div>
  ),
  ru: (
    <div>
      <p className="mb-3">
        Я начал свой путь в программировании с{" "}
        <span className="font-medium">C++</span> как своего первого языка
        программирования. В 2021 году я отправился на поиски своей страсти в
        мире программирования. Я записался на курсы программирования и
        погрузился в мир{" "}
        <span className="font-medium">фронтенд-разработки</span>.{" "}
        <span className="italic">
          Самая любимая часть программирования для меня
        </span>{" "}
        — это искусство решения задач и наблюдение за конечными результатами
        моих усилий. Я <span className="underline">люблю</span> момент, когда
        мне удается решить сложную задачу и наблюдать преображение проекта от
        идеи до потрясающей реальности. Мой основной стек технологий включает в
        себя <span className="font-medium">React и Node.js</span>, и я также
        знаком с <span className="font-medium">TypeScript и Tailwind</span>. Я
        всегда готов учить новые технологии.{" "}
        <span className="italic">
          У меня есть большое желание получить степень бакалавра по информатике
          в будущем.
        </span>
      </p>
      <p>
        <span className="italic">Когда я не программировать</span>, мне нравится
        играть в видеоигры и смотреть фильмы. У меня также есть страсть к{" "}
        <span className="font-medium">изучению новых вещей</span>. В настоящее
        время я углубляюсь в области{" "}
        <span className="font-medium">психологии и философии</span>, а также
        изучаю, как играть на пианино.
      </p>
    </div>
  ),
  ua: (
    <div>
      <p className="mb-3">
        Я розпочав свій шлях в програмуванні з{" "}
        <span className="font-medium">C++</span> як моєї першої мови
        програмування. У 2021 році я вирушив на пошуки своєї страсті у світі
        програмування. Я записався на курси програмування і погрузився в світ{" "}
        <span className="font-medium">розробки веб-інтерфейсів</span>.{" "}
        <span className="italic">
          Найбільша улюблена частина програмування для мене
        </span>{" "}
        — це мистецтво вирішення проблем та спостереження за конкретними
        результатами моїх зусиль. Я <span className="underline">люблю</span>{" "}
        момент, коли мені вдається вирішити складну задачу та спостерігати за
        перетворенням проекту від ідеї до реальності. Мій основний стек
        технологій включає в себе{" "}
        <span className="font-medium">React і Node.js</span>, і я також знайомий
        з <span className="font-medium">TypeScript і Tailwind</span>. Я завжди
        готовий вчити нові технології.{" "}
        <span className="italic">
          У мене є велике бажання отримати ступінь бакалавра з інформатики в
          майбутньому.
        </span>
      </p>
      <p>
        <span className="italic">Коли я не програмую</span>, мені подобається
        грати в відеоігри і дивитися фільми. У мене також є страсть до{" "}
        <span className="font-medium">вивчення нових речей</span>. В даний час я
        досліджую галузі{" "}
        <span className="font-medium">психології і філософії</span>, а також
        вчуся грати на піаніно.
      </p>
    </div>
  ),
};

export default function About({ title }) {
  const { ref } = useSectionInView("About");
  const { languageMode } = useStateContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader name={title} />
      {aboutData[languageMode]}
    </motion.section>
  );
}
