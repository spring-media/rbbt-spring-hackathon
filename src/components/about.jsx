import React from 'react';
import styled from 'styled-components';
import Text from '../elements/text';

const Video = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const Links = styled.div`
  li {
    display: inline-flex;
    margin: 1em;

    &:nth-child(1) {
      a {
        background: ${props => props.theme.colors.primary.green};
      }
    }
    &:nth-child(2) {
      a {
        background: ${props => props.theme.colors.primary.orange};
      }
    }
    &:nth-child(3) {
      a {
        background: ${props => props.theme.colors.primary.yellow};
      }
    }
  }

  a {
    color: #fff;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #fff;
      transform: scale(1.03);
    }
  }
`;

const About = content => (
  <>
    <Video dangerouslySetInnerHTML={{ __html: content.content.video.childMarkdownRemark.html }} />
    <TextWrapper>
      <Text content={content.content.mission.childMarkdownRemark.html} />
      <Text content={content.content.topic.childMarkdownRemark.html} />
    </TextWrapper>
    <Links dangerouslySetInnerHTML={{ __html: content.content.links.childMarkdownRemark.html }} />
  </>
);

export default About;
