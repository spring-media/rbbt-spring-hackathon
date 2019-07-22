/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { navigateTo } from 'gatsby-link';
import styled from 'styled-components';
import Container from '../elements/container';

const FormWrapper = styled.div``;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class Contact extends React.Component {
  render() {
    return (
      <Container className="push">
        <FormWrapper>
          <form>
            <label>
              First Name:
              <input type="text" name="first-name" onChange={this.handleChange} placeholder="First Name" />
            </label>
            <label>
              Last Name:
              <input type="text" name="last-name" onChange={this.handleChange} placeholder="Last Name" />
            </label>
            <label>
              E-mail:
              <input type="email" name="email" onChange={this.handleChange} placeholder="E-Mail" />
            </label>
            <label>
              Message:
              <textarea rows="10" name="message" onChange={this.handleChange} placeholder="Message" />
            </label>
            <button type="submit">Send</button>
          </form>
        </FormWrapper>
      </Container>
    );
  }
}
