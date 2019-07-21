/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import Container from './container';

const renderJury = (title, fluid, description) => {
  return (
    <div>
      <h5>{title}</h5>
      <Img fluid={fluid} />
      <p>{description}</p>
    </div>
  );
};

const Prizes = ({
  content: {
    sectionTitle,
    childContentfulPrizesPrizesTextNode: {
      childMarkdownRemark: { html },
    },
    jury,
  },
}) => {
  console.log(jury);

  return (
    <Container type="small">
      <h2>{sectionTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>{jury.map(item => renderJury(item.title, item.fluid, item.description))}</div>
    </Container>
  );
};

export default Prizes;
