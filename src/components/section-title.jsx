import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = props => {
  const { children } = props;
  return <h2>{children}</h2>;
};

SectionTitle.defaultProps = {
  children: PropTypes.children,
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
