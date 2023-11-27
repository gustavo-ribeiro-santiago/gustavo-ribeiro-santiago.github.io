const projects = [
  {
    title:"Issues Management Application",
    description:"Application developed in 2021 using Power Apps and Power BI as part of a consulting project to a mining company. The application helped users track governmental issues and stakeholders relevant to the company.",
    cover: "./assets/issues management.jpg",
    tags:["Professional Work", "Power Platform", "UI/UX"],
    websiteLink:"https://gustavo-ribeiro-santiago.github.io/issues-management-application/",
    gitHubRepository:"https://github.com/gustavo-ribeiro-santiago/issues-management-application"
  },
  {
    title:"Rio de Janeiro Real Time Bus Tracker",
    description:"This web application showcases the use of Mapbox and Leaflet to create an interactive map that displays the real-time locations of buses in Rio de Janeiro. The bus location data is fetched from the cityhall's API to display bus markers on the map. It utilizes the Leaflet Markercluster plugin for efficient marker clustering.",
    cover: "./assets/real time bus tracker project.png",
    tags:["APIs", "Maps", "MIT Coding Assignment"],
    websiteLink:"https://gustavo-ribeiro-santiago.github.io/real-time-bus-tracker-rj/",
    gitHubRepository:"https://github.com/gustavo-ribeiro-santiago/real-time-bus-tracker-rj"
  },
  {
    title:"Rioops Task Manager",
    description:"The Rioops Task Manager is a comprehensive task management system developed from 2019 to 2020 using Microsoft Access and VBA for seamless integration and efficient task tracking within a large shipping company. This tailored solution was designed to streamline, organize and automate various operational tasks, enhancing productivity and ensuring timely deliveries.",
    cover: "./assets/rioops task manager.png",
    tags:["Professional Work", "Access", "VBA", "UI/UX"],
    websiteLink:"https://gustavo-ribeiro-santiago.github.io/sw-task-management/",
    gitHubRepository:"https://github.com/gustavo-ribeiro-santiago/sw-task-management"
  },
  {
    title:"Guess the Painting Game",
    description:"This project is a fun and interactive game that challenges your knowledge of famous paintings and artists. You will be presented with a partially obscured painting, and your goal is to guess the name of the painting and the artist who created it. The catch is that the more of the painting you reveal, the fewer points you can earn.",
    cover: "./assets/guess the painting game.png",
    tags:["Game", "Personal"],
    websiteLink:"https://gustavo-ribeiro-santiago.github.io/guess-the-painting-game/",
    gitHubRepository:"https://github.com/gustavo-ribeiro-santiago/guess-the-painting-game"
  },
  {
    title:"Pac-Man Animation",
    description:"A simple Pac-Man animation where the player can create multiple Pac-Men that move around the screen and bounce off the walls. The Pac-Men change directions and display different images to create a fun and interactive animation.",
    cover: "./assets/pac-man animation.png",
    tags:["MIT Coding Assignment"],
    websiteLink:"https://gustavo-ribeiro-santiago.github.io/pac-man-animation/",
    gitHubRepository:"https://github.com/gustavo-ribeiro-santiago/pac-man-animation"
  },
  {
    title:"Interactive Follow-the-Mouse Eyes",
    description:"Experience a captivating animation where a pair of eyes follows your every move. The eyes react to your mouse cursor, adding an element of interactivity and charm to the visual display.",
    cover: "./assets/eyes.png",
    tags:["MIT Coding Assignment"],
    websiteLink:"https://gustavo-ribeiro-santiago.github.io/eyes-exercise/",
    gitHubRepository:"https://github.com/gustavo-ribeiro-santiago/eyes-exercise"
  },
];
const tagsStyles = {
  "APIs":"primary",
  "Maps":"secondary",
  "MIT Coding Assignment":"success",
  "Game":"warning",
  "Personal":"info",
  "Professional Work": "dark", 
  "Power Platform": "success", 
  "UI/UX": "danger",
  "Access": "secondary",
  "VBA": "success"
};
const tagsFilters = {
  "APIs":false,
  "Maps":false,
  "MIT Coding Assignment":false,
  "Game":false,
  "Personal":false,
  "Professional Work": false, 
  "Power Platform": false, 
  "UI/UX": false,
  "Access": false,
  "VBA": false
};
let searchedProjects = [];

const renderTagsFilters = () => {
  // Function to render tags filters on top of page
  document.getElementById("tags").innerHTML = "";
  Object.keys(tagsStyles).forEach(tag => {
    document.getElementById("tags").innerHTML +=
    `<button type="button" class="btn btn${tagsFilters[tag] ? "" : "-outline"}-${tagsStyles[tag]} mx-1 mt-1 btn-sm ${tag}">${tag}</button>`
  });
  // add click event listener to each tag filter
  Object.keys(tagsStyles).forEach(tag => {
    const elements = document.getElementsByClassName(tag);
    for (let e of elements) {
      e.addEventListener("click", () => {
        tagsFilters[tag] = !tagsFilters[tag];
        renderProjects();
        renderTagsFilters();
      });
    };
  });
}

const renderProjects = () => {
  // Function to render projects' cards on page
  let htmlProjects = "";
  let odd = true;
  projects.forEach(project => {
    // apply tag filters, if any
    let hideProject = false;
    if (Object.values(tagsFilters).indexOf(true) > -1) {
      hideProject = true;
      project.tags.forEach(tag => {
        if (tagsFilters[tag] === true) hideProject = false;
      });
    }
    // apply filter from searchbar
    if (searchedProjects.length > 0 && searchedProjects.indexOf(project.title) < 0) hideProject = true;
    if (hideProject === true) return;
    // create html elements
    let htmlTags = "";
    project.tags.forEach(tag => {
      htmlTags += `<button type="button" class="btn btn${tagsFilters[tag] ? "" : "-outline"}-${tagsStyles[tag]} btn-sm mx-1 ${tag}" 
      style="padding-top: 2px; padding-bottom: 2px">${tag}</button>`;
    });
    htmlProjects += `
    <div class="col py-3" ${odd ? ' style="background:rgba(240,240,240,0.5)"' : ''}>
      <div class="card mx-auto w-50">
        <a href='${project.websiteLink}'>
          <img width="100%" class="bd-placeholder-img card-img-top" src="${project.cover}" alt="">
        </a>
        <div class="card-body">
          <h5 class="card-title text-dark">${project.title}</h5>
          <p class="card-text">${project.description} ${htmlTags}</p>
          <a href="${project.websiteLink}" class="btn btn-primary mr-1">View Demo</a>
          <a href="${project.gitHubRepository}" class="btn btn-secondary mx-1">GitHub Repository</a>
        </div>
      </div>
    </div>`
    odd = !odd;
  });
  document.getElementById("projects").innerHTML = htmlProjects;
}

const initializeSearchbar = () => {
  // Search input in all projects' properties
  const searchProject = (searchInput) => {
    searchedProjects = [];
    projects.forEach(project => {
      Object.values(project).forEach(property => {
        if (property.indexOf(searchInput) > -1) searchedProjects.push(project.title)
      });
    });
    renderProjects();
    renderTagsFilters();
    if (searchedProjects.length > 0) return;
    document.getElementById("noResultsAlertContainer").innerHTML = `<div class="alert alert-danger" role="alert">
    Sorry. Your search did not return any results. 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    setTimeout(() => document.getElementById("noResultsAlertContainer").innerHTML = "", 8000)
  };
  // add submit event listener to searchbar
  const searchbar = document.getElementById('searchbar');
  searchbar.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page from refreshing
    const searchInput = document.getElementById('searchInput').value;
    searchProject(searchInput);
  });
}

renderProjects();
renderTagsFilters();
initializeSearchbar();