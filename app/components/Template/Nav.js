import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sunny Panchal</h2>
        <p><a href="mailto:sunny.p.panchal@gmail.com">sunny.p.panchal@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Hi, I’m Sunny. I’m an AI researcher trying to make sense of and replicate cognitive capabilities using a multi-disciplinary approach. The wonders of consciousness, very nature of being, sublime complexity of our brain, and where our species is headed will forever have me spiralling down a rabbit hole. When I’m not thinking about those, I like to boulder, play squash and meditate.
      </p>

      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      {/*Need to decide whether I keep the copyright claim here*/}
      <p className="copyright">&copy; Sunny Panchal <Link to="/">sunnypanchal.ca</Link>.</p>
    </section>
  </section>
);

export default Nav;
