import highground from '../../images/high-ground.png';
import budget from '../../images/budget.png';
import shows from '../../images/tv-shows.png';
import cryptoapp from '../../images/cryptoapp2.png';

const ProjectsData = [
  {
    title: 'Todo List App',
    gitHub: 'https://github.com/wayungi/ToDoListApp',
    live: 'https://soft-malabi-1a9e7c.netlify.app/',
    description: [
      "A web app designed to keep track of complete and incomplete tasks.",
      "Users can add or delete tasks. Tasks can also be marked as complete or incomplete.",
      "Built with JavaScript, HTML, CSS and Webpack."
    ],
    skills: ['Javascript', 'HTML', 'CSS'],
    image: budget,
  },

  {
    title: 'Book Manager',
    gitHub: 'https://github.com/wayungi/Awesome_books_es6_2',
    live: 'https://wayungi.github.io/Awesome_books_es6_2/',
    description: [
      "Awesome books is a SPA (Single Page Application) which stores books and their authors.",
      "The app has three pages where a user can add book details, view added books, and a contact information page. Added books can also be deleted.",
      "Built with JavaScript, HTML and CSS" 
    ],
    skills: ["JavaScript", "HTML", "CSS"],
    image: highground,
  },
  {
    title: 'Crypto Cash',
    gitHub: 'https://github.com/wayungi/crypto-cash',
    live: 'https://diegoyon-crytoapp.netlify.app/',
    description: [
      "Cryto-cash is an application that consumes the CoinCap API that contains updated information about cryptocurrencies.",
      "Currencies displayed can be filtered by ranking, price or percentage change. It also shows more information about each crytocurrency including a graph showing the price variations."
    ],
    skills: ['React', 'Redux'],
    image: cryptoapp,
  },
 
  {
    title: 'Top Movies',
    gitHub: 'https://github.com/wayungi/browse-movie',
    live: 'https://alphantihinduka.github.io/Browse-movie-app/',
    description: [
      'A web application based on an external API which contains information about movies.',
      'Users can like, comment on and reserve thier favourite movies. This applicaction uses an involvement API to save user interactions data.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    image: shows,
  },
];

export default ProjectsData;
