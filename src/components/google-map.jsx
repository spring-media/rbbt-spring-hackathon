import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 500px;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 350px;
  }
`;

const Marker = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.color.pink};
  border-radius: 50% 50% 0;
  transform: rotate(45deg);

  &:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    top: 25%;
    left: 25%;
    border-radius: 50%;
  }
`;

const GoogleMap = props => {
  const { coordinates } = props;
  const lat = parseFloat(coordinates.lat);
  const lng = parseFloat(coordinates.lon);

  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 13,
  };

  const redirectMap = () => {
    const url = `http://www.google.com/maps/place/${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={lat} lng={lng} onClick={redirectMap} />
      </GoogleMapReact>
    </Wrapper>
  );
};

GoogleMap.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default GoogleMap;
