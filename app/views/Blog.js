import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';
import data from '../data/blog';

const Blog = () => (
  <Main>
    <Helmet title="Blog" />
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2><Link to="/blog">Blog</Link></h2>
          {/*<p>A selection of projects that I&apos;m not too ashamed of</p>*/}
          <p>COMING SOON</p>
        </div>
      </header>
      {/*data.map((blogpost) => (
        <Cell
          data={blogpost}
          key={blogpost.title}
        />
      ))*/}
    </article>
  </Main>
);

export default Blog;
