import React, { useState } from 'react';
import './Projects.css';
import Project from '../../components/Project/Project';
import ProjectsData from '../../components/Project/ProjectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState([]);
  const [skills, setSkills] = useState([]);
  const [live, setLive] = useState();
  const handleSlideChange = (e) => {
    setTitle(ProjectsData[e.realIndex].title);
    setDescription(ProjectsData[e.realIndex].description);
    setSkills(ProjectsData[e.realIndex].skills);
    setLive(ProjectsData[e.realIndex].live);
  };

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <Swiper
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {ProjectsData.map((project) => (
            <SwiperSlide key={project.title}>
              <img src={project.image} alt={project.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Project
          title={title}
          live={live}
          description={description}
          skills={skills}
        />
      </div>
      <a
        className="all-projects-button"
        target="_blank"
        rel="noreferrer"
      >
        <button type="submit" value="Projects Archive">
          All Projects Archive
        </button>
      </a>
    </section>
  );
};

export default Projects;
