import React from 'react';
import './Home.css';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Home = () => {
  return (
    <section className="home" id="home">
      {/* <h3>Hey there!</h3> */}
      <h1>Yahui Guo</h1>
      <h2>FULL-STACK DEVELOPER</h2>
      <p>Establish web design, user interaction test and database maintenance.</p>
      <ul className="icon-list">
      <li>
          <a
            href="https://github.com/YahuiG"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="icons github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="icons linkedIn" />
          </a>
        </li>
        <li>
          <a
            href="mailto: zzm0815gyh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail className="icons mail" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="icons twitter" />
          </a>
        </li>
        
      </ul>
    </section>
  );
};

export default Home;
