import React from 'react';
import './Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiRuby } from 'react-icons/di';
import {
  SiJavascript,
  SiTailwindcss,
  SiRubyonrails,
  SiRedux,
  SiPostgresql,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 data-aos="zoom-in" data-aos-duration="2000">
        My Skills
      </h2>
      <div className="skills-grid" data-aos="zoom-in" data-aos-duration="2000">
        <div className="skill-card">
          <SiJavascript className="skill-icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <DiRuby className="skill-icon ruby_rails" />
          <p>Ruby</p>
        </div>
        <div className="skill-card">
          <SiRubyonrails className="skill-icon ruby_rails" />
          <p>Ruby On Rails</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <SiRedux className="skill-icon redux"/>
          <p>Redux</p>
        </div>
        <div className="skill-card">
          <SiTailwindcss className="skill-icon tailwind" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-card">
          <DiCss3 className="skill-icon css3" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <SiPostgresql className="skill-icon" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-card">
          <AiFillHtml5 className="skill-icon html5" />
          <p>HTML</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
