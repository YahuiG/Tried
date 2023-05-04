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
            Hi! I am Yahui, you can also call me Erica:)
            I love building new and innovative
            solutions for the Web while solving all kinds of challenges
            that come along with the tasks.
          </p>
          <p>
            I have graduated from BCIT, majoring in Computer Systems Technology.
          </p>
          <p>
            Reach out to me if you need a project design or test or any other help of coding. Check out some of my work right below in the project section.
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
