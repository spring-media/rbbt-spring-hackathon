/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import Container from './container';
import SectionTitle from './section-title';
import GoogleMap from './google-map';

const LocationVenue = ({ content: { sectionTitle, address, coordinates, venue } }) => {
  return (
    <Container type="small">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <p>{address}</p>
      <GoogleMap coordinates={coordinates} />
      <Img fluid={venue.fluid} />
    </Container>
  );
};

export default LocationVenue;
