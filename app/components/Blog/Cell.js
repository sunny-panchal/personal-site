import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a className="image">
        <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

// const Cell = ({ data, handleClick }) => (
//   <div className="cell-container" onClick={() => handleClick(data.title, data.date)}>
//     <article className="mini-post">
//       <header >
//         <h3><a onClick={() => handleClick(data.title, data.date)}>{data.title}</a></h3>
//         <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
//       </header>
//       <a className="image">
//         <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
//       </a>
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>
//   </div>
// );
//
// Cell.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//   }).isRequired,
//   handleClick: PropTypes.func.isRequired,
// };

export default Cell;
