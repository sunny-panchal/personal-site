import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';

import Main from '../../../layouts/Main';

// TODO: choose one
import markdown from '../../../data/markdown/project/.md';
import markdown from '../../../data/markdown/blog/.md';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

// TODO: Change name
const NAME = () => (
  <Main>
    <Helmet title="Blog" />
    <article className="post" id="blog">
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

// TODO: Change name
export default NAME;
