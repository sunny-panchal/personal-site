import ReactGA from 'react-ga';
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

ReactGA.initialize('UA-147410230-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// remove posts with show: false
var filteredData = data.filter(function(post) {
  return post.show === true;
});

// Sort by date
filteredData.sort((a,b) => (a.date < b.date) ? 1 : -1);

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects and assignments I&apos;ve worked on over the past few years.</p>
          <p> Coming Soon </p>
        </div>
      </header>
      {filteredData.map((project) => (
        <Link to={project.link}>
          <Cell
            data={project}
            key={project.title}
          />
        </Link>
      ))}
    </article>
  </Main>
);

export default Projects;
