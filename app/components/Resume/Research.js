import React from 'react';
import PropTypes from 'prop-types';

import ResearchExp from './Experience/Research';

const Research = ({ data }) => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>Research Experience</h3>
    </div>
    {data.map((research) => (
      <ResearchExp
        data={research}
        key={research.company}
      />
    ))}
  </div>
);

Research.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Research.defaultProps = {
  data: [],
};


export default Research;
