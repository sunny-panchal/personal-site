import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';

import Main from '../../../layouts/Main';


import markdown from '../../../data/markdown/project/risotto-stone.md';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const RisottoStone = () => (
  <Main>
    <Helmet title="Project" />
    <article className="post" id="project">
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

export default RisottoStone;
