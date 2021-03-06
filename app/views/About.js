import ReactGA from 'react-ga';
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/about.md';

ReactGA.initialize('UA-147410230-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
          {<p>(in about {count} words)</p>}
        </div>
      </header>
      {<ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />}
    </article>
  </Main>
);

export default About;
