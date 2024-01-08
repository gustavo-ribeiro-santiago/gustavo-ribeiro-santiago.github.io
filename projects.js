const projects = [
  {
    title: 'Rio de Janeiro Real Time Bus Tracker',
    description:
      "This web application showcases the use of Mapbox and Leaflet to create an interactive map that displays the real-time locations of buses in Rio de Janeiro. The bus location data is fetched from the cityhall's API to display bus markers on the map. It utilizes the Leaflet Markercluster plugin for efficient marker clustering.",
    cover: './assets/real time bus tracker project.png',
    tags: [
      'Personal',
      'React',
      'Mobile First',
      'Leaflet',
      'Mapbox',
      'Bootstrap',
    ],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/real-time-bus-tracker-rj/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/real-time-bus-tracker-rj',
  },
  {
    title: 'Hacker News Stories Website',
    description:
      'This React application provides a user-friendly interface for exploring the latest Hacker News stories. Users can search for specific topics and navigate through paginated results. The app also includes a feature to display comments and subcomments associated with each story.',
    cover: './assets/hacker news stories.png',
    tags: [
      'Personal',
      'React',
      'Mobile First',
      'Bootstrap',
    ],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/hacker-news-stories/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/hacker-news-stories',
  },
  {
    title: 'The Simple Speech App',
    description:
      'How many years of education are required to understand your speech? The Flesch-Kincaid Grade Level score is a very popular test used by educators, marketeers, policy makers and many others. Interestingly, successful communicators such as Steve Jobs and Elon Musk are known to give speeches that, according to this test, demand minimal education.',
    cover: './assets/the simple speech app.png',
    tags: [
      'Personal',
      'React',
      'Mobile First',
      'Bootstrap',
    ],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/the-simple-speech-app/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/the-simple-speech-app',
  },
  {
    title: 'Issues Management Application',
    description:
      'Application developed in 2021 using Power Apps and Power BI as part of a consulting project to a mining company. The application helped users track governmental issues and stakeholders relevant to the company.',
    cover: './assets/issues management.jpg',
    tags: ['Professional Work', 'Power Platform', 'UI/UX'],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/issues-management-application/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/issues-management-application',
  },
  {
    title: 'Rioops Task Manager',
    description:
      'The Rioops Task Manager is a comprehensive task management system developed from 2019 to 2020 using Microsoft Access and VBA for seamless integration and efficient task tracking within a large shipping company. This tailored solution was designed to streamline, organize and automate various operational tasks, enhancing productivity and ensuring timely deliveries.',
    cover: './assets/rioops task manager.png',
    tags: ['Professional Work', 'Access', 'VBA', 'UI/UX'],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/sw-task-management/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/sw-task-management',
  },
  {
    title: 'Guess the Painting Game',
    description:
      'This project is a fun and interactive game that challenges your knowledge of famous paintings and artists. You will be presented with a partially obscured painting, and your goal is to guess the name of the painting and the artist who created it. The catch is that the more of the painting you reveal, the fewer points you can earn.',
    cover: './assets/guess the painting game.png',
    tags: ['Personal', 'Game', 'Tailwind CSS'],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/guess-the-painting-game/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/guess-the-painting-game',
  },
  {
    title: 'Star Wars Game',
    description:
      'This project was submitted as a requirement for the Industrial Engineering course at UFRJ. It was presented in fulfillment of the requirements for the Programming 2 class in 2016. The game is developed in Python, incorporates Object-Oriented Programming (OOP) principles, and utilizes the Tkinter library for the graphical user interface.',
    cover: './assets/star wars game.png',
    tags: ['University', 'Game', 'Python', 'Object-Oriented Programming'],
    websiteLink: 'https://gustavo-ribeiro-santiago.github.io/star-wars-game/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/star-wars-game',
  },
  {
    title: 'Pac-Man Animation',
    description:
      'A simple Pac-Man animation where the player can create multiple Pac-Men that move around the screen and bounce off the walls. The Pac-Men change directions and display different images to create a fun and interactive animation.',
    cover: './assets/pac-man animation.png',
    tags: ['MIT Coding Assignment'],
    websiteLink:
      'https://gustavo-ribeiro-santiago.github.io/pac-man-animation/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/pac-man-animation',
  },
  {
    title: 'Interactive Follow-the-Mouse Eyes',
    description:
      'Experience a captivating animation where a pair of eyes follows your every move. The eyes react to your mouse cursor, adding an element of interactivity and charm to the visual display.',
    cover: './assets/eyes.png',
    tags: ['MIT Coding Assignment'],
    websiteLink: 'https://gustavo-ribeiro-santiago.github.io/eyes-exercise/',
    gitHubRepository:
      'https://github.com/gustavo-ribeiro-santiago/eyes-exercise',
  },
];
const tags = [
  {
    tag: 'React',
    style: 'primary',
    selected: false,
  },
  {
    tag: 'Leaflet',
    style: 'success',
    selected: false,
  },
  {
    tag: 'Mapbox',
    style: 'secondary',
    selected: false,
  },
  {
    tag: 'Personal',
    style: 'warning',
    selected: false,
  },
  {
    tag: 'MIT Coding Assignment',
    style: 'success',
    selected: false,
  },
  {
    tag: 'Professional Work',
    style: 'dark',
    selected: false,
  },
  {
    tag: 'University',
    style: 'warning',
    selected: false,
  },
  {
    tag: 'Power Platform',
    style: 'success',
    selected: false,
  },
  {
    tag: 'UI/UX',
    style: 'danger',
    selected: false,
  },
  {
    tag: 'Access',
    style: 'secondary',
    selected: false,
  },
  {
    tag: 'VBA',
    style: 'primary',
    selected: false,
  },
  {
    tag: 'Game',
    style: 'success',
    selected: false,
  },
  {
    tag: 'Bootstrap',
    style: 'danger',
    selected: false,
  },
  {
    tag: 'Tailwind CSS',
    style: 'info',
    selected: false,
  },
  {
    tag: 'Python',
    style: 'primary',
    selected: false,
  },
  {
    tag: 'Object-Oriented Programming',
    style: 'dark',
    selected: false,
  },
  {
    tag: 'Mobile First',
    style: 'danger',
    selected: false,
  },
];
let searchedProjects = [];

const renderTagsFilters = () => {
  // Render tags filters on top of page
  tagsContainer = document.getElementById('tags');
  tagsContainer.innerHTML = '';
  tags.forEach(({ tag, style, selected }) => {
    tagsContainer.innerHTML += `<button type="button" class="btn btn${
      selected ? '' : '-outline'
    }-${style} mx-1 mt-1 btn-sm ${tag}">${tag}</button>`;
  });
  // add click event listener to each tag filter
  tags.forEach(({ tag, selected }, i) => {
    const elements = document.getElementsByClassName(tag);
    for (let e of elements) {
      e.addEventListener('click', () => {
        tags[i].selected = !selected;
        renderProjects();
        renderTagsFilters();
      });
    }
  });
};

const renderProjects = () => {
  // Render projects' cards on page
  let htmlProjects = '';
  let selectedTags = tags
    .filter(({ selected }) => selected)
    .map(({ tag }) => tag);
  projects.forEach(
    ({
      title,
      description,
      cover,
      websiteLink,
      gitHubRepository,
      tags: projTags,
    }) => {
      // apply tag filters, if any is selected
      if (selectedTags.length) {
        let projSelTags = projTags.filter((tag) => selectedTags.includes(tag));
        if (!projSelTags.length) return;
      }
      // apply filter from searchbar
      if (searchedProjects.length && !searchedProjects.includes(title)) return;
      // create html elements
      let htmlTags = '';
      projTags.forEach((projTag) => {
        ({ selected, style } = tags.find(({ tag }) => tag === projTag));
        htmlTags += `<button type="button" class="btn btn${
          selected ? '' : '-outline'
        }-${style} btn-sm mx-1 ${projTag} project-tag">${projTag}</button>`;
      });
      htmlProjects += `
        <div class="project-div col py-3">
          <div class="project-card card mx-auto">
            <a href='${websiteLink}'>
              <img width="100%" class="bd-placeholder-img card-img-top" src="${cover}" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title text-dark">${title}</h5>
              <p class="card-text">${description} <br/> ${htmlTags}</p>
              <a href="${websiteLink}" class="btn btn-primary mr-1">View Demo</a>
              <a href="${gitHubRepository}" class="btn btn-secondary mx-1">GitHub Repository</a>
            </div>
          </div>
        </div>`;
    }
  );
  document.getElementById('projects').innerHTML = htmlProjects;
};

const searchProject = (searchInput) => {
  // Search input in all projects' properties
  searchedProjects = projects
    .filter((project) =>
      Object.values(project).find((prop) => prop.includes(searchInput))
    )
    .map(({ title }) => title);
  renderProjects();
  renderTagsFilters();
  if (searchedProjects.length > 0) return;
  noResults = document.getElementById('noResultsAlertContainer');
  noResults.innerHTML = `
  <div class="alert alert-danger" role="alert">
    Sorry. Your search did not return any results. 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(() => (noResults.innerHTML = ''), 8000);
};

const initializeSearchbar = () => {
  // add submit event listener to searchbar
  const searchbar = document.getElementById('searchbar');
  searchbar.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    searchProject(searchInput);
  });
};

renderProjects();
renderTagsFilters();
initializeSearchbar();
