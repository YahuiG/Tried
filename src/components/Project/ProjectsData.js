import highground from '../../images/high-ground.png';
import budget from '../../images/budget.png';
import shows from '../../images/tv-shows.png';
import cryptoapp from '../../images/cryptoapp2.png';

const ProjectsData = [
  {
    title: 'Brittn connect',
    gitHub: 'https://github.com/wayungi/brit-con',
    live: 'https://www.brittnconnect.com/',
    description: [
      'Brit connect is a website for an ISP. The Company posts all inportant information for its clients on the site',
    ],
    skills: ['Ruby On Rails', 'PostgreSQL', 'HTML', 'CSS'],
    image: budget,
  },

  {
    title: 'Bikers',
    gitHub: 'https://github.com/Alzubair98/group-project-front-end',
    live: 'https://helpful-douhua-bfc6b0.netlify.app/',
    description: [
      'This Website is for a bicycle company. It is used to book appointments to try out their new bikes.',
      "Users can book and cancel appointments. They can also reserve a bike. Built with React and Ruby on Rails.",
    ],
    skills: ['React', 'Ruby on Rails'],
    image: highground,
  },
  {
    title: 'Space Travellers',
    gitHub: 'https://github.com/nimplay/space-travelers',
    live: 'https://whimsical-sherbet-40bd6b.netlify.app/',
    description: [
      'Space Travellers is a single page application that users can use to book trips to outter space.',
      'Users can check which space shuttles and missions are available for booking. Built with React & Redux using space missions API',
    ],
    skills: ['React', 'Redux'],
    image: cryptoapp,
  },
 
  {
    title: 'Top Movies',
    gitHub: 'https://github.com/wayungi/browse-movie',
    live: 'https://alphantihinduka.github.io/Browse-movie-app/',
    description: [
      'A web application based on an external API which contains information about Movies.',
      'Users can Like, Comment on and Mark favourite thier favourite movies. This Applicaction uses an involvement API to save user interactions data.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    image: shows,
  },
];

export default ProjectsData;
