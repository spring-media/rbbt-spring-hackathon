import React from 'react';
import styled from 'styled-components';
import Container from './container';

const Video = styled.section``;

const TextWrapper = styled.section`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Text = styled.article`
  &:first-child {
    padding-right: 1em;
  }
  &:last-child {
    padding-left: 1em;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  li {
    display: inline-block;
    margin: 0 1em;

    &:nth-child(1) {
      a {
        background: ${props => props.theme.colors.secondary.neonGreen};
      }
    }
    &:nth-child(2) {
      a {
        background: ${props => props.theme.colors.secondary.red};
      }
    }
    &:nth-child(3) {
      a {
        background: ${props => props.theme.colors.secondary.pink};
      }
    }
  }

  a {
    color: #fff;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;
  }
`;

const About = content => {
  return (
    <Container type="small">
      <h2>{content.content.sectionTitle}</h2>
      <Video dangerouslySetInnerHTML={{ __html: content.content.video.childMarkdownRemark.html }} />
      <TextWrapper>
        <Text
          dangerouslySetInnerHTML={{
            __html: content.content.mission.childMarkdownRemark.html,
          }}
        />
        <Text
          dangerouslySetInnerHTML={{
            __html: content.content.topic.childMarkdownRemark.html,
          }}
        />
      </TextWrapper>
      <Links dangerouslySetInnerHTML={{ __html: content.content.links.childMarkdownRemark.html }} />
    </Container>
  );
};

export default About;
