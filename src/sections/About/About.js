import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="information">
        <div className="bio" data-aos="flip-left">
          <p>
            Hi! I am Francis, I love building new and innovative
            solutions for the Web while solving all kinds of challenges
            that come along with the tasks.
          </p>
          <p>
            I have  over 5 years of work experience and 2 of these are in software development.
            I have worked as an IT technician, Scala back-end developer, website admin and as a DStv technician.
            I am constantly expanding the limits of my technical abilities by learning new languages, frameworks, and technologies.
          </p>
          <p>
            Reach out to me if you need a project built. Check out some of my work right below in the project section.
          </p>
        </div>
        <div className="profile-pic" data-aos="flip-right">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <form
        action="https://drive.google.com/file/d/1Rj0JpMp-xVntNR4ioyK0X8Wf-v36ZckV/view?usp=sharing"
        target="_blank"
      >
        <button type="submit" value="View Resume">
          View Resume
        </button>
      </form>
    </section>
  );
};

export default About;
