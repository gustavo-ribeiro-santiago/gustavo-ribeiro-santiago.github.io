import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';

function App() {
  const projectTypes = [
    'AI & Machine Learning',
    'Web Development',
    'Power Platform',
    'Others',
  ];

  const allSkills = [
    {
      label: 'Python',
      logoFileName: 'python.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'Scikit-learn',
      logoFileName: 'scikit-learn.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Keras',
      logoFileName: 'keras.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Tensorflow',
      logoFileName: 'tensorflow.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Pandas',
      logoFileName: 'pandas.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Numpy',
      logoFileName: 'numpy.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'OpenCV',
      logoFileName: 'opencv.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Matplotlib',
      logoFileName: 'matplotlib.webp',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Seaborn',
      logoFileName: 'seaborn.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'FastAPI',
      logoFileName: 'fastapi.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'Django',
      logoFileName: 'django.jpg',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'LangChain',
      logoFileName: 'langchain.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Hugging Face',
      logoFileName: 'hugging face.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'Spacy',
      logoFileName: 'spacy.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'NLTK',
      logoFileName: 'nltk.png',
      type: ['AI & Machine Learning'],
    },
    {
      label: 'React',
      logoFileName: 'react.png',
      type: ['Web Development'],
    },
    {
      label: 'Next.js',
      logoFileName: 'nextjs.png',
      type: ['Web Development'],
    },
    {
      label: 'JavaScript',
      logoFileName: 'js.webp',
      type: ['Web Development'],
    },
    {
      label: 'HTML5',
      logoFileName: 'html5.png',
      type: ['Web Development'],
    },
    {
      label: 'CSS3',
      logoFileName: 'css3.png',
      type: ['Web Development'],
    },
    {
      label: 'Git',
      logoFileName: 'git.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'GitHub Actions',
      logoFileName: 'github-actions.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'Docker',
      logoFileName: 'docker.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'PostgreSQL',
      logoFileName: 'postgresql.webp',
      type: ['Web Development'],
    },
    {
      label: 'MySQL',
      logoFileName: 'mysql.png',
      type: ['Web Development'],
    },
    {
      label: 'AWS',
      logoFileName: 'aws.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'AWS EC2',
      logoFileName: 'aws ec2.jpg',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'AWS S3',
      logoFileName: 'aws s3.png',
      type: ['AI & Machine Learning', 'Web Development'],
    },
    {
      label: 'Firebase',
      logoFileName: 'firebase.png',
      type: ['Web Development'],
    },
    {
      label: 'Strapi',
      logoFileName: 'strapi.png',
      type: ['Web Development'],
    },
    {
      label: 'Stripe',
      logoFileName: 'stripe.webp',
      type: ['Web Development'],
    },
    {
      label: 'Vercel',
      logoFileName: 'vercel.png',
      type: ['Web Development'],
    },
    {
      label: 'Postman',
      logoFileName: 'postman.png',
      type: ['Web Development'],
    },
    {
      label: 'Power BI',
      logoFileName: 'power bi.png',
      type: ['Power Platform'],
    },
    {
      label: 'Power Apps',
      logoFileName: 'powerapps.png',
      type: ['Power Platform'],
    },
    {
      label: 'Power Automate',
      logoFileName: 'power automate.png',
      type: ['Power Platform'],
    },
    {
      label: 'Microsoft Access',
      logoFileName: 'access.png',
      type: ['Others'],
    },
    {
      label: 'Visual Basic for Applications',
      logoFileName: 'vba.png',
      type: ['Others'],
    },
  ];

  const projects = [
    {
      title: 'Find the Vehicles App',
      description:
        'This application uses YOLO, trained through transfer learning, for \
  vehicle detection and annotation, achieving 85% accuracy for cars. The backend is built with FastAPI and served \
  on an AWS EC2 instance. The frontend is built with Next.js and deployed on Vercel.',
      cover: './assets/find the vehicles app.png',
      type: ['AI & Machine Learning', 'Web Development'],
      skills: [
        'Python',
        'Pandas',
        'Numpy',
        'OpenCV',
        'Matplotlib',
        'FastAPI',
        'Docker',
        'AWS',
        'AWS EC2',
        'Next.js',
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Vercel',
        'Git',
        'GitHub Actions',
        'Postman',
      ],
      websiteLink: 'https://find-the-vehicles.vercel.app/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/find-the-vehicles-app',
    },
    {
      title: 'Hacker News Stories',
      description:
        'This React application provides a user-friendly interface for exploring \
  the Hacker News stories. Users can summarize articles with AI, bookmark articles, \
  filter by date and by tags, sort by different criteria, search for keywords and \
  navigate through paginated results.',
      cover: './assets/hacker news stories.png',
      type: ['AI & Machine Learning', 'Web Development'],
      skills: [
        'Python',
        'Django',
        'LangChain',
        'MySQL',
        'Docker',
        'AWS',
        'AWS EC2',
        'Firebase',
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Git',
        'GitHub Actions',
        'Postman',
      ],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/hacker-news-stories/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/hacker-news-stories',
    },
    {
      title: 'Rio de Janeiro Real Time Bus Tracker',
      description:
        "This web application showcases the use of Mapbox and Leaflet to create an \
  interactive map that displays the real-time locations of buses in Rio de Janeiro. \
  The bus location data is fetched from the cityhall's API to display bus markers on \
  the map. It utilizes the Leaflet Markercluster plugin for efficient marker clustering.",
      cover: './assets/real time bus tracker project.png',
      type: ['Web Development'],
      skills: [
        'React',
        //  'Leaflet',
        //  'Mapbox',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Git',
      ],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/real-time-bus-tracker-rj/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/real-time-bus-tracker-rj',
    },
    {
      title: 'Yelp 1-5 Star Ratings Classifier',
      description:
        "This project presents a machine learning pipeline for classifying Yelp \
        reviews into 1-5 star ratings using multiple supervised learning models. \
        The top model, a fine-tuned RoBERTa, achieved 63% accuracy and F1 scores \
        from 50% to 69%, which is reasonable given the difficulty of distinguishing \
        nuanced ratings from text (e.g., 2 vs. 3 stars). Additionally, a Power BI \
        dashboard helps visualize the models' results.",
      cover: './assets/yelp star ratings predictions.png',
      type: ['AI & Machine Learning', 'Power Platform'],
      skills: [
        'Python',
        'Scikit-learn',
        'Keras',
        'Tensorflow',
        'Hugging Face',
        'Spacy',
        'NLTK',
        'Pandas',
        'Numpy',
        'Matplotlib',
        'Seaborn',
        'Power BI',
      ],
      websiteLink:
        'https://colab.research.google.com/drive/1-LlGHYMmxs1I94A-L3JyftgCQtLDMI_U#scrollTo=MRqtBh44kreg',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/yelp_stars_prediction',
    },
    {
      title: 'Rocket Food Delivery App',
      description:
        'Rocket Food Delivery is a full-stack food delivery app built with Next.js \
  and React for the user interface and Stripe for secure payment processing. The \
  back-end, powered by Strapi, handles user authentication, order management, and \
  restaurant data, with PostgreSQL as the data storage solution. Front-end hosted \
  on Vercel, while AWS S3 stores media assets and the backend is served on an AWS \
  EC2 instance.',
      cover: './assets/rocket food delivery.png',
      type: ['Web Development'],
      skills: [
        'Strapi',
        'PostgreSQL',
        'Stripe',
        'Vercel',
        'AWS',
        'AWS EC2',
        'AWS S3',
        'React',
        'Next.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Git',
        'Postman',
      ],
      websiteLink: 'https://rocket-food-delivery.vercel.app',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/full-stack-food-delivery-frontend',
    },
    {
      title: 'Automating Port Operations Project',
      description:
        'Caltech project focused on developing two deep learning models using CNN \
        architecture: one built from scratch, and the other leveraging transfer \
        learning with MobileNetV2 as the base model, which achieved 88% accuracy.',
      cover: './assets/automating port operations.png',
      type: ['AI & Machine Learning'],
      skills: [
        'Python',
        'Scikit-learn',
        'Keras',
        'Tensorflow',
        'Matplotlib',
        'Seaborn',
      ],
      websiteLink:
        'https://colab.research.google.com/drive/1-OuC1f3lETQh0HIpxgw7bx3Lnr5s2bku',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/automating-port-operations-project',
    },
    {
      title: 'The Simple Speech App',
      description:
        'How many years of education are required to understand your speech? The \
  Flesch-Kincaid Grade Level score is a very popular test used by educators, \
  marketeers, policy makers and many others. Interestingly, successful communicators \
  are known to give speeches that, according to this test, demand minimal education.',
      cover: './assets/the simple speech app.png',
      type: ['Web Development'],
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/the-simple-speech-app/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/the-simple-speech-app',
    },
    {
      title: 'Issues Management Application',
      description:
        'Application developed in 2021 using Power Apps, Power BI and Power Automate as part of a \
  consulting project to a mining company. The application helped users track \
  governmental issues and stakeholders relevant to the company.',
      cover: './assets/issues management.jpg',
      type: ['Power Platform'],
      skills: ['Power Apps', 'Power BI', 'Power Automate'],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/issues-management-application/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/issues-management-application',
    },
    {
      title: 'Rioops Task Manager',
      description:
        'The Rioops Task Manager is a task management system developed \
  from 2019 to 2020 using Microsoft Access and VBA for seamless integration and \
  efficient task tracking within a large shipping company. This tailored solution \
  was designed to streamline, organize and automate various operational tasks, \
  enhancing productivity and ensuring timely deliveries.',
      cover: './assets/rioops task manager.png',
      type: ['Others'],
      skills: ['Microsoft Access', 'Visual Basic for Applications'],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/sw-task-management/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/sw-task-management',
    },
    {
      title: 'Guess the Painting Game',
      description:
        'This project is a fun and interactive game that challenges your knowledge of \
  famous paintings and artists. You will be presented with a partially obscured painting, \
  and your goal is to guess the name of the painting and the artist who created it. The \
  catch is that the more of the painting you reveal, the fewer points you can earn.',
      cover: './assets/guess the painting game.png',
      type: ['Web Development'],
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/guess-the-painting-game/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/guess-the-painting-game',
    },
    {
      title: 'Star Wars Game',
      description:
        'This project was submitted as a requirement for the Industrial Engineering course \
  at UFRJ, as the final project for the Programming 2 class in \
  2016. The game was developed in Python, incorporates Object-Oriented Programming (OOP) \
  principles, and utilizes the Tkinter library for the graphical user interface.',
      cover: './assets/star wars game.png',
      type: ['Others'],
      skills: ['Python'],
      websiteLink: 'https://gustavo-ribeiro-santiago.github.io/star-wars-game/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/star-wars-game',
    },
    {
      title: 'Pac-Man Animation',
      description:
        'A simple Pac-Man animation where the player can create multiple Pac-Men that move \
  around the screen and bounce off the walls. The Pac-Men change directions and display \
  different images to create a fun and interactive animation.',
      cover: './assets/pac-man animation.png',
      type: ['Web Development'],
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
      websiteLink:
        'https://gustavo-ribeiro-santiago.github.io/pac-man-animation/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/pac-man-animation',
    },
    {
      title: 'Interactive Follow-the-Mouse Eyes',
      description:
        'Experience a captivating animation where a pair of eyes follows your every move. \
  The eyes react to your mouse cursor, adding an element of interactivity and charm to the \
  visual display.',
      cover: './assets/eyes.png',
      type: ['Web Development'],
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
      websiteLink: 'https://gustavo-ribeiro-santiago.github.io/eyes-exercise/',
      gitHubRepository:
        'https://github.com/gustavo-ribeiro-santiago/eyes-exercise',
    },
  ];

  const [filteredProjectTypes, setFilteredProjectTypes] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  const [projectsWithDetails, setProjectsWithDetails] = useState(
    projects.map(({ title }) => {
      return { title, show: false };
    })
  );

  const handleSelectProjectType = (projectType) => {
    setFilteredProjectTypes([projectType]);
    window.location.hash = '#';
    window.location.hash = '#projects';
  };

  const handleFilterProjectType = (projectType) => {
    filteredProjectTypes.indexOf(projectType) === -1 &&
      setFilteredProjectTypes([...filteredProjectTypes, projectType]);
    window.location.hash = '#';
    window.location.hash = '#projects';
  };

  const handleUnfilterProjectType = (projectType) => {
    const updatedState = filteredProjectTypes.filter(
      (type) => type !== projectType
    );
    setFilteredProjectTypes(updatedState);
    window.location.hash = '#';
    window.location.hash = '#projects';
  };

  const handleSelectSkill = (skill) => {
    setFilteredSkills([skill]);
    window.location.hash = '#';
    window.location.hash = '#projects';
  };

  const handleFilterSkill = (skill) => {
    filteredSkills.indexOf(skill) === -1 &&
      setFilteredSkills([...filteredSkills, skill]);
    window.location.hash = '#';
    window.location.hash = '#projects';
  };

  const handleUnfilterSkill = (unselectedSkill) => {
    const updatedState = filteredSkills.filter(
      (skill) => skill !== unselectedSkill
    );
    setFilteredSkills(updatedState);
    window.location.hash = '#';
    window.location.hash = '#projects';
  };

  return (
    <>
      <NavBar />
      <main className="main">
        <About />
        <Contact />
        <TypesOfProjects handleSelectProjectType={handleSelectProjectType} />
        <SkillsSection
          handleSelectSkill={handleSelectSkill}
          allSkills={allSkills}
        />

        <ProjectsSection
          projects={projects}
          projectTypes={projectTypes}
          filteredProjectTypes={filteredProjectTypes}
          handleFilterProjectType={handleFilterProjectType}
          handleUnfilterProjectType={handleUnfilterProjectType}
          allSkills={allSkills}
          filteredSkills={filteredSkills}
          handleFilterSkill={handleFilterSkill}
          handleUnfilterSkill={handleUnfilterSkill}
          projectsWithDetails={projectsWithDetails}
          setProjectsWithDetails={setProjectsWithDetails}
        />
      </main>
    </>
  );
}

function FilterSkillChip({
  label,
  logoFileName,
  selected,
  handleFilterSkill,
  handleUnfilterSkill,
  outline,
}) {
  return (
    <Chip
      icon={<img height="20px" src={`./assets/logos/${logoFileName}`}></img>}
      onDelete={selected ? () => handleUnfilterSkill(label) : null}
      onClick={selected ? null : () => handleFilterSkill(label)}
      label={label}
      variant={outline ? 'outlined' : undefined}
    />
  );
}

function ProjectCard({
  project,
  setProjectsWithDetails,
  projectsWithDetails,
  allSkills,
  handleFilterSkill,
  handleUnfilterSkill,
  filteredSkills,
}) {
  const toggleShowDescription = (title) => {
    setProjectsWithDetails((projectsWithDetails) =>
      projectsWithDetails.map((project) =>
        project.title === title ? { ...project, show: !project.show } : project
      )
    );
  };

  return (
    <div className="project-container border rounded-5">
      <div className="project-photo-container">
        <img
          onClick={() => (window.location.href = project.websiteLink)}
          width="100%"
          className="project-photo grow-on-hover-1_1"
          src={project.cover}
          alt="app photo"
          title="Visit Demo"
        ></img>
      </div>
      <div className="project-data p-2">
        <h5 className="text-center my-2">{project.title}</h5>
        <div
          className="project-description py-2 border rounded-3"
          onClick={() => toggleShowDescription(project.title)}
        >
          <i
            className={`bi bi-chevron-${
              projectsWithDetails.filter(
                ({ title }) => project.title === title
              )[0].show
                ? 'down'
                : 'right'
            } me-2 ms-2`}
          ></i>
          Description
          {projectsWithDetails.filter(({ title }) => project.title === title)[0]
            .show ? (
            <p className="text-justify p-2 mx-3 mb-2">{project.description}</p>
          ) : (
            ''
          )}
        </div>
        <div className="project-chips mt-3 text-justify d-flex flex-wrap gap-2">
          {project.type.map((type) => {
            return <Chip label={type} onClick={() => {}} variant="outlined" />;
          })}
        </div>
        <div className="project-chips mt-2 text-justify d-flex flex-wrap gap-2">
          {project.skills.map((skill) => {
            const skillData = allSkills.filter(
              ({ label }) => label === skill
            )[0];
            if (filteredSkills.indexOf(skill) !== -1 && filteredSkills.length) {
              return (
                <Chip
                  icon={
                    <img
                      height="20px"
                      src={`./assets/logos/${skillData.logoFileName}`}
                    ></img>
                  }
                  onDelete={() => handleUnfilterSkill(skill)}
                  label={skillData.label}
                />
              );
            }
            return (
              <Chip
                icon={
                  <img
                    height="20px"
                    src={`./assets/logos/${skillData.logoFileName}`}
                  ></img>
                }
                onClick={() => handleFilterSkill(skill)}
                label={skillData.label}
                variant="outlined"
              />
            );
          })}
        </div>
        <div className="project-links-buttons d-flex mt-4 mb-2 gap-3 justify-content-center">
          <Button
            variant="outline-dark px-2"
            onClick={() => (window.location.href = project.websiteLink)}
          >
            <i className="bi bi-play-fill"></i> Demo
          </Button>
          <Button
            variant="outline-dark px-2"
            onClick={() => (window.location.href = project.gitHubRepository)}
          >
            <i className="bi bi-github"></i> GitHub Repository
          </Button>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand={'lg'}
      className="bg-body-tertiary mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="nav-title-fs">
          Gustavo Ribeiro Santiago's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#types  ">Types of Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

function About() {
  return (
    <section
      className="about-section p-5 align-items-center g-5 mb-5 bg-white rounded-5"
      id="about"
    >
      <div className="">
        <h3 className="text-primary mb-2">
          Hi, I am Gustavo Ribeiro Santiago.
        </h3>
        <br />
        <p className="lead bio-text">
          I'm a Brazilian software developer with a degree in industrial
          engineering from UFRJ. After starting my career in management
          consulting, I discovered a passion for software development and
          transitioned into this field.
          <br /> <br />
          This site showcases a range of projects, from professional work to
          personal initiatives, including those from my studies in MIT's
          Professional Certificate in Coding and Caltech's AI & Machine Learning
          Program.
        </p>
      </div>
      <div className="flex-lg-row-reverse my-auto bio-image">
        <img
          src="./assets/3x4.JPG"
          className="d-block mx-lg-auto img-fluid rounded mx-auto mb-4"
          alt="Bio Picture"
          width="250"
          height="200"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section bg-white rounded-5" id="contact">
      <div className="lead p-2 m-5 py-5">
        <h3 className="mb-3 text-primary">Contact me</h3>
        <div className="contact-info d-flex gap-3 justify-content-between pt-3 flex-wrap">
          <div>
            <i className="bi bi-envelope me-2"></i>
            <a className="link-dark" href="mailto:gustavorisa@poli.ufrj.br">
              gustavorisa@poli.ufrj.br
            </a>
          </div>
          <div>
            <i className="bi bi-telephone me-2"></i>
            <a className="link-dark" href="tel:+5521996360063">
              +55 (21) 99636-0063
            </a>
          </div>
          <div>
            <i className="bi bi-github me-2"></i>
            <a
              className="link-dark"
              href="https://github.com/gustavo-ribeiro-santiago"
            >
              GitHub
            </a>
          </div>
          <div>
            <i className="bi bi-linkedin me-2"></i>
            <a
              className="link-dark"
              href="https://www.linkedin.com/in/gustavo-santiago-541641144/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypesOfProjects({ handleSelectProjectType }) {
  return (
    <section className="types-section bg-white rounded-5 p-2" id="types">
      <h3 className="px-5 mt-5 text-primary text-center">Types of Projects</h3>
      <div className="d-flex justify-content-center flex-wrap my-3">
        <div className="d-flex flex-wrap">
          <Card
            className="card-type-of-project grow-on-hover"
            onClick={() => handleSelectProjectType('AI & Machine Learning')}
          >
            <Card.Img
              variant="top"
              src="./assets/neural-network-machine-learning.jpg"
            />
            <Card.Body>
              <Card.Title>AI & Machine Learning</Card.Title>
              <Card.Text>View Projects →</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="card-type-of-project grow-on-hover"
            onClick={() => handleSelectProjectType('Web Development')}
          >
            <Card.Img
              className="border web-dev-photo"
              variant="top"
              src="./assets/webdev.png"
            />
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>View Projects →</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex flex-wrap">
          <Card
            className="card-type-of-project grow-on-hover"
            onClick={() => handleSelectProjectType('Power Platform')}
          >
            <Card.Img
              variant="top"
              src="./assets/power-bi-data-model-view.png"
            />
            <Card.Body>
              <Card.Title>Power Platform</Card.Title>
              <Card.Text>View Projects →</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="card-type-of-project grow-on-hover"
            onClick={() => handleSelectProjectType('Others')}
          >
            <Card.Img variant="top" src="./assets/other projects.jpg" />
            <Card.Body>
              <Card.Title>Other Projects</Card.Title>
              <Card.Text>View Projects →</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SkillsSection({ handleSelectSkill, allSkills }) {
  return (
    <section className="skills-section bg-white rounded-5 p-2" id="skills">
      <h3 className="text-center mt-5 text-primary">Skills</h3>
      <div className="p-3 d-flex flex-wrap justify-content-start">
        <div className="bg-white p-2 gap-3 my-2">
          <h5 className="fw-semibold my-auto">AI & Machine Learning: </h5>
          <div className="bg-white p-2 gap-3 d-flex flex-wrap my-3">
            {allSkills
              .filter(
                (skill) => skill.type.indexOf('AI & Machine Learning') !== -1
              )
              .map(({ label, logoFileName }) => {
                return (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <strong>{label}</strong> <br />
                        Click to view projects with this technology.
                      </Tooltip>
                    }
                  >
                    <img
                      height="40px"
                      src={`./assets/logos/${logoFileName}`}
                      className="skill-logo grow-on-hover"
                      onClick={() => handleSelectSkill(label)}
                    ></img>
                  </OverlayTrigger>
                );
              })}
          </div>
        </div>
        <div className="bg-white p-2 gap-3 my-2">
          <h5 className="fw-semibold my-auto">Web Development: </h5>
          <div className="bg-white p-2 gap-3 d-flex flex-wrap my-3">
            {allSkills
              .filter((skill) => skill.type.indexOf('Web Development') !== -1)
              .map(({ label, logoFileName }) => {
                return (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <strong>{label}</strong> <br />
                        Click to view projects with this technology.
                      </Tooltip>
                    }
                  >
                    <img
                      height="40px"
                      src={`./assets/logos/${logoFileName}`}
                      className="skill-logo grow-on-hover"
                      onClick={() => handleSelectSkill(label)}
                    ></img>
                  </OverlayTrigger>
                );
              })}
          </div>
        </div>
        <div className="bg-white p-2 gap-3 my-2">
          <h5 className="fw-semibold my-auto">Power Platform: </h5>
          <div className="bg-white p-2 gap-3 d-flex flex-wrap my-3 me-5">
            {allSkills
              .filter((skill) => skill.type.indexOf('Power Platform') !== -1)
              .map(({ label, logoFileName }) => {
                return (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <strong>{label}</strong> <br />
                        Click to view projects with this technology.
                      </Tooltip>
                    }
                  >
                    <img
                      height="40px"
                      src={`./assets/logos/${logoFileName}`}
                      className="skill-logo grow-on-hover"
                      onClick={() => handleSelectSkill(label)}
                    ></img>
                  </OverlayTrigger>
                );
              })}
          </div>
        </div>
        <div className="bg-white p-2 gap-3 my-2">
          <h5 className="fw-semibold my-auto">Others: </h5>
          <div className="bg-white p-2 gap-3 d-flex flex-wrap my-3">
            {allSkills
              .filter((skill) => skill.type.indexOf('Others') !== -1)
              .map(({ label, logoFileName }) => {
                return (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <strong>{label}</strong> <br />
                        Click to view projects with this technology.
                      </Tooltip>
                    }
                  >
                    <img
                      height="40px"
                      src={`./assets/logos/${logoFileName}`}
                      className="skill-logo grow-on-hover"
                      onClick={() => handleSelectSkill(label)}
                    ></img>
                  </OverlayTrigger>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({
  projects,
  projectTypes,
  filteredProjectTypes,
  handleFilterProjectType,
  handleUnfilterProjectType,
  allSkills,
  filteredSkills,
  handleFilterSkill,
  handleUnfilterSkill,
  projectsWithDetails,
  setProjectsWithDetails,
}) {
  const [query, setQuery] = useState('');
  const filteredProjects = projects.filter((project) => {
    if (query !== '') {
      return (
        project.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        project.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    if (!filteredSkills.length && !filteredProjectTypes.length) return true;
    if (filteredProjectTypes.length) {
      return project.type.some((type) => filteredProjectTypes.includes(type));
    }
    if (filteredSkills.length) {
      return project.skills.some((skill) => filteredSkills.includes(skill));
    }
  });

  return (
    <section className="projects-section bg-white rounded-5 p-2" id="projects">
      <h3 className="text-center mt-5 text-primary">Projects</h3>
      <div className="d-flex search-container">
        <i className="bi bi-search my-auto ms-1 me-3"></i>
        <Form.Control
          id="form-search"
          className="search"
          placeholder={'Search...'}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="ms-5 mt-4 pt-1 d-flex flex-wrap gap-2">
        <span className="filter-by-type me-1">Types of Project:</span>{' '}
        {filteredProjectTypes.map((type) => {
          return (
            <Chip
              label={type}
              onDelete={() => handleUnfilterProjectType(type)}
            />
          );
        })}
        {filteredProjectTypes.length ? ' | ' : ''}
        {projectTypes.map((type) => {
          if (filteredProjectTypes.length) {
            if (filteredProjectTypes.indexOf(type) !== -1) {
              return;
            }
          }
          return (
            <Chip
              label={type}
              onClick={() => handleFilterProjectType(type)}
              variant="outlined"
            />
          );
        })}
      </div>
      <div className="ms-5 mt-4 d-flex gap-2 flex-wrap">
        <span className="my-auto me-1">Technology Stack:</span>{' '}
        {filteredSkills.map((skillName) => {
          const skill = allSkills.filter(
            (skill) => skill.label === skillName
          )[0];
          return (
            <FilterSkillChip
              label={skill.label}
              logoFileName={skill.logoFileName}
              selected={true}
              outline={false}
              handleFilterSkill={handleFilterSkill}
              handleUnfilterSkill={handleUnfilterSkill}
            />
          );
        })}
        {filteredSkills.length ? ' | ' : ''}
        {allSkills.map((skill) => {
          if (filteredSkills.length) {
            if (filteredSkills.indexOf(skill.label) !== -1) {
              return;
            }
          }
          return (
            <FilterSkillChip
              label={skill.label}
              logoFileName={skill.logoFileName}
              selected={false}
              outline={true}
              handleFilterSkill={handleFilterSkill}
            />
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <span className="text-secondary ">
          Showing {filteredProjects.length} out of {projects.length}
        </span>
      </div>
      {filteredProjects.map((project) => {
        return (
          <ProjectCard
            project={project}
            setProjectsWithDetails={setProjectsWithDetails}
            projectsWithDetails={projectsWithDetails}
            allSkills={allSkills}
            handleFilterSkill={handleFilterSkill}
            handleUnfilterSkill={handleUnfilterSkill}
            filteredSkills={filteredSkills}
          />
        );
      })}
    </section>
  );
}

export default App;
