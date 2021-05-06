import ReactGA from 'react-ga';
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

ReactGA.initialize('UA-147410230-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const PageNotFound = () => (
  <div className="not-found">
    <Helmet title="404" />
    <h1>Page Not Found.</h1>
    <p>Return to <Link to="/">index</Link>.</p>
  </div>
);

export default PageNotFound;
