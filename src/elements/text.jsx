import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;

  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}
`;

const Text = ({ content, center, className }) => {
  const createMarkup = rawContent => ({ __html: rawContent });
  return (
    <Wrapper className={className} center={center}>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
    </Wrapper>
  );
};

export default Text;

Text.propTypes = {
  content: PropTypes.node.isRequired,
  center: PropTypes.bool,
  className: PropTypes.string,
};

Text.defaultProps = {
  center: false,
  className: null,
};
