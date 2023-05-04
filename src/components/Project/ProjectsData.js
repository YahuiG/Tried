import highground from '../../images/high-ground.png';
import budget from '../../images/budget.png';
import shows from '../../images/tv-shows.png';
import cryptoapp from '../../images/cryptoapp2.png';

const ProjectsData = [
  {
    title: 'Todo List App',
    live: 'https://cutetodolist.netlify.app/',
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
    live: 'https://wayungi.github.io/Awesome_books_es6_2/',
    description: [
      "Awesome books is a SPA (Single Page Application) which stores books and their authors.",
      "The app has three pages where a user can add book details, view added books, and a contact information page. Added books can also be deleted.",
      "Built with JavaScript, HTML and CSS" 
    ],
    skills: ["JavaScript", "HTML", "CSS"],
    image: highground,
  },
];

export default ProjectsData;
