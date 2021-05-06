import ReactGA from 'react-ga';
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

ReactGA.initialize('UA-147410230-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Stats = () => (
  <Main>
    <Helmet title="Stats" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      {/*<Site />*/}
    </article>
  </Main>
);

export default Stats;

// TODO: New Features
//   - Word map from posts
//   - Number of publications
//   - Chart for posts 
