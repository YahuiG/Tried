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
    title: 'Budget App',
    gitHub: ' https://github.com/wayungi/budget-app1/blob/main/README.md',
    live: 'https://budgetup.onrender.com/',
    description: [
      "Budget Applets you manage your spending." ,
      "You can add a category of items you want to spend on and the app will aggregates your net expenses per category.",
      "Built with Ruby on Rails." 
    ],
    skills: ['Ruby on Rails'],
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
      'A web application based on an external API which contains information about movies.',
      'Users can like, comment on and reserve thier favourite movies. This applicaction uses an involvement API to save user interactions data.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    image: shows,
  },
];

export default ProjectsData;
