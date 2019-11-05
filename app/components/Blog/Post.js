import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Post = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <a href={data.link} className="image">
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
