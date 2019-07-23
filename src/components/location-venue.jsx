/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import GoogleMap from './google-map';

const Address = styled.address`
  font-style: normal;
`;

const Wrapper = styled.div`
  margin-top: 3em;
  margin-bottom: 3em;
`;

const LocationVenue = ({ content: { address, coordinates, venue } }) => (
  <>
    <Address>{address}</Address>
    <Wrapper>
      <GoogleMap coordinates={coordinates} />
    </Wrapper>
    <Wrapper>
      <Img fluid={venue.fluid} />
    </Wrapper>
  </>
);

export default LocationVenue;
