const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const main = document.querySelector('.main');
const works = document.getElementById('portifolio');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.navitem').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
  main.classList.remove('active');
}));

const projects = [
  {
    id: 'proj1',
    title: 'Todo list App',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,
    description:
      'Todo list App is a simple web app that helps to organize your day.It simply lists the things that you need to do and allows you to mark them as complete,delete a task or add a new task and you can even clean all of the completed tasks if you want.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './images/Todolist.PNG',
    live: 'https://shihabrafio.github.io/To-do-list/',
    source: 'https://github.com/shihabrafio/To-do-list',
  },

  {
    id: 'proj2',
    title: 'Awesome Books',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,
    description:
      'Awesome-books project is a basic website that allows users to add/remove books from a list.It showcases the use of ES6 JavaScript objects and arrays to dynamically modify the DOM and add basic events.',

    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './images/awesome.png',
    live: 'https://shihabrafio.github.io/Awesome-Books/',
    source: 'https://github.com/shihabrafio/Awesome-Books-ES6',
  },

  {
    id: 'proj3',
    title: 'MECO CHOCOLATE',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      'MECO is a company that specializes in providing AI-driven solutions and services to help businesses streamline their operations and improve their performance. Their focus is on developing cutting-edge AI technologies, such as natural language processing and machine learning, to help companies gain insights and make data-driven decisions. ',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './images/Meco.PNG',
    live: 'https://shihabrafio.github.io/Meco-Chocolate/',
    source: 'https://github.com/shihabrafio/Meco-Chocolate',
  },

  {
    id: 'proj4',
    title: 'Leaderboard',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      ' Leaderboard project is a versatile and engaging platform that aims to foster healthy competition and collaboration among individuals or teams in various fields or activities. Whether its a coding competition, a fitness challenge, a gaming tournament, or any other type of competitive endeavor, the Leaderboard project provides a centralized space to track and showcase participants progress, achievements, and rankings.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './images/Leaderboard.PNG',
    live: 'https://shihabrafio.github.io/Leaderboard/',
    source: 'https://github.com/shihabrafio/Leaderboard',
  },
  {
    id: 'proj5',
    title: 'Movie Monday',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      ' Movie Monday is a dynamic web application designed for movie enthusiasts to explore, discover, and engage with the world of cinema. This repository contains the source code and files for the Movie Monday website, an online platform dedicated to enhancing the movie-watching experience.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'api',
    },
    image: './images/Movie-Monday.PNG',
    live: 'https://shihabrafio.github.io/Movie-Monday/',
    source: 'https://github.com/shihabrafio/Movie-Monday',
  },
  {
    id: 'proj6',
    title: 'Math-Magician',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      ' Math Magician, users can access a wide range of functionalities that cater to different mathematical needs. The application supports basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users to quickly perform calculations with ease. Additionally, Math Magician goes beyond simple arithmetic and includes advanced features like exponentiation, square roots, factorials, and more, enabling users to tackle complex mathematical tasks effortlessly.',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'Api',
      tech5: 'REACT',
    },
    image: './images/Math-magician.PNG',
    live: 'https://math-magician-eo3z.onrender.com/Calculator',
    source: 'https://github.com/shihabrafio/Math-Magician',
  },
  {
    id: 'proj7',
    title: 'Space Travelers Hub',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      "Space Traverlers' Hub is a corporation that offers services for commercial and scientific space flight has a web application called Space-Travelers-Hub. Users of the app will be able to reserve rockets and sign up for particular space missions.",
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'Api',
      tech5: 'REACT',
      tech6: 'Redux',
    },
    image: './images/Space-hub.png',
    live: 'https://space-travel-hub-dupt.onrender.com/',
    source: 'https://github.com/shihabrafio/Space-Hub',
  },
  {
    id: 'proj8',
    title: 'ECOCLIMA',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      'ECOCLIMA Revolutionizing climate action with an environmental-social app. Stay informed and connected to protect our planet. Real-time air quality updates and a supportive community. Embrace positive peer pressure for a sustainable future. Join us in making a collective impact for a greener world',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'Api',
      tech5: 'REACT',
      tech6: 'Redux',
    },
    image: './images/EcoClima.png',
    live: 'https://github.com/shihabrafio/EcoClima',
    source: 'https://github.com/shihabrafio/EcoClima',
  },
  {
    id: 'proj9',
    title: 'TASKMATE',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      'TaskMate is a user-friendly React app that simplifies task management and enhances productivity. With its intuitive interface, users can easily create, organize, and prioritize tasks. The app offers features like due dates, reminders, and advanced filtering, allowing users to stay on top of their responsibilities.',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'REACT',
    },
    image: './images/TaskMate.PNG',
    live: 'https://taskmate-nwzt.onrender.com/',
    source: 'https://github.com/shihabrafio/Taskmate',
  },
  {
    id: 'proj10',
    title: 'Sky Movie',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      'Sky Movie is a movie information application that utilizes the TMDB API to provide users with comprehensive details about movies. With this app, users can access a vast database of movies, including information such as titles, genres, release dates, ratings, and cast members. The app leverages the TMDB API to fetch and display accurate and up-to-date movie data, allowing users to explore and discover information about their favorite films. It offers an intuitive interface that makes it easy for users to search for movies, view detailed information, and stay informed about the latest movie releases..',
    technologies: {
      tech1: 'html',
      tech2: 'Tailwind Css',
      tech3: 'JSX',
      tech4: 'REACT',
    },
    image: './images/Sky-Movie.png',
    live: 'https://movie-api-lqpn.onrender.com/',
    source: 'https://github.com/shihabrafio/Sky-Movie',
  },
  {
    id: 'proj11',
    title: 'TASKMATE',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
      'TaskMate is a user-friendly React app that simplifies task management and enhances productivity. With its intuitive interface, users can easily create, organize, and prioritize tasks. The app offers features like due dates, reminders, and advanced filtering, allowing users to stay on top of their responsibilities.',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech5: 'REACT',
    },
    image: './images/TaskMate.PNG',
    live: 'https://taskmate-nwzt.onrender.com/',
    source: 'https://github.com/shihabrafio/Taskmate',
  },
];
let count = 1;
projects.forEach((project) => {
  const newdiv = document.createElement('div');
  newdiv.innerHTML = `
  <div class="cards">
    <div class="image">
        <img src="${project.image}" alt="image">
    </div>
    <div class="desc">
        <h2 class="title">${project.title}</h2>
        <ul class="icons fav">
            <li class="cano">${project.company}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${
  project.specialization
}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${
  project.year
}</li>
        </ul>
        <p class="desctext">
        ${project.description}
        </p>
        <ul class="tech icons">
        ${Object.values(project.technologies)
    .map((tech) => `<li class="techitems">${tech}</li>`)
    .join('\n')}
      </ul>
      
        <button type="button" id="${
  project.id
}" class="see">See Project</button>
    </div>
  </div>`;
  works.append(newdiv);
});

const image = document.querySelectorAll('.image');
image.forEach((im) => {
  if (count % 2 === 0) {
    im.classList.add('two');
  }
  count += 1;
});

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');

seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="tile">
      <h2 class="title">${pop.title}</h2>
      <button class="close">&times;</button>
    </div>
    <ul class="icons fav">
      <li class="cano">${pop.company}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${
  pop.specialization
}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${
  pop.year
}</li>
    </ul>
    </div>
    <img src="${pop.image}" alt="live">
    <div class="explain">
      <p class="desctext">
        ${pop.description}
      </p>
      <div class="smart">
      <ul class="tech icons">
      ${Object.values(pop.technologies)
    .map((tech) => `<li class="techitems">${tech}</li>`)
    .join('\n')}
    </ul>
    
          <div class="btns">
            <button type="button" id="live" class="but">See live &nbsp; &nbsp;
              <img src="./images/live.png" alt="live">
            </button>
            <button type="button" id="source" class="but">See source &nbsp; &nbsp;
              <img src="./images/github.svg" alt="source">
            </button>
          </div>
      </div>
  </div>  `;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));

const formdata = {
  yourname: '',
  youremail: '',
  yourmessage: '',
};

const fields = [...document.querySelectorAll('.names')];
fields.forEach((n) => n.addEventListener('change', () => {
  const index = fields.indexOf(n);
  if (index === 0) { formdata.yourname = document.forms[0].elements[index].value; } 
  else if (index === 1) { formdata.youremail = document.forms[0].elements[index].value; } 
  else formdata.yourmessage = document.forms[0].elements[index].value;
  window.localStorage.setItem('formdata', JSON.stringify(formdata));
}));

if (window.localStorage.getItem('formdata') !== null) {
  const formdata = JSON.parse(window.localStorage.getItem('formdata'));
  document.forms[0].elements[0].value = formdata.yourname;
  document.forms[0].elements[1].value = formdata.youremail;
  document.forms[0].elements[2].value = formdata.yourmessage;
}

const intouch = document.getElementById('intouch');

intouch.addEventListener('click', () => {
  const email = document.forms[0].elements[1].value;
  const small = document.getElementById('small');
  if (email.toLowerCase() !== email) {
    small.innerText = 'Enter your email in lower case letters';
    document.forms[0].addEventListener('submit', (event) => {
      event.preventDefault();
    });
  } else {
    document.forms[0].submit();
  }
});
