import React from 'react';
import Container from './container';
import SectionTitle from './section-title';
import GoogleMap from './google-map';

const LocationVenue = content => {
  return (
    <Container type="small">
      <SectionTitle>{content.content.sectionTitle}</SectionTitle>
      <p>{content.content.address}</p>
      <GoogleMap coordinates={content.content.coordinates} />
    </Container>
  );
};

export default LocationVenue;
