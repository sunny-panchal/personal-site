import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import projectData from '../data/projects';
import blogData from '../data/blog';

// Concatenate blogs and project posts
var allData = projectData.concat(blogData);

// Sort by date
allData.sort((a,b) => (a.date < b.date) ? 1 : -1);

// remove posts with show: false
allData = allData.filter(function(data) {
  return data.show === true;
});

// Show N most recent updates
var mostRecentN = 3;

allData = allData.slice(0,mostRecentN);

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A beautiful, responsive, react app written with modern Javascript.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <div className="body">
        <h2>Recent Updates</h2>
        <p> No new updates </p>
        {/*Add conditional no recent updates line*/}
        {allData.map((data) => (
          <Cell
            data={data}
            key={data.title}
          />
        ))}
      </div>
      <p> This site was bootstrapped from Michael D'Angelo's project. Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
