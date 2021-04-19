import React from "react";
import styled from "styled-components";
import ak from "../Images/ak.png";

import {
  MainHeadingWrapper,
  ParagraphWrapper,
  SubHeadingWrapper,
} from "../Elements/Elements";

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  min-height: 50vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  flex-wrap: wrap;

  > div:nth-child(1) {
    max-width: 900px;
  }
`;

const Profile = styled.div`
  background: url(${ak});
  width: 350px;
  height: 350px;
  background-size: cover;
  background-color: #ccc9c9;
  margin: 50px auto;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
`;

const Social = styled.div`
  margin-top: 20px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: 40px;
    margin: 30px;
  }
`;

function About() {
  return (
    <Wrapper backgroundColor="#d1cccc" id="about">
      <MainHeadingWrapper>
        <h1>About Me</h1>
        <div></div>
      </MainHeadingWrapper>
      <SubHeadingWrapper>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      </SubHeadingWrapper>
      <Content>
        <ParagraphWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            quasi qui tempore fugit tempora. Dolorum dolore nemo sint ipsum,
            beatae nam debitis! Quaerat quam ducimus unde nihil? Natus tempora,
            quas eum rerum aspernatur officiis et ullam minima suscipit quam,
            iure deserunt? Facilis cum perspiciatis autem. Vel eum totam fuga
            molestiae non nesciunt distinctio eaque hic illo sed sequi at modi
            rem, enim voluptatum, alias officia culpa nam asperiores? Vel
            voluptatum voluptatem accusamus, in omnis obcaecati maiores autem
            officia amet rem, recusandae minima impedit error provident minus
            perferendis laborum soluta ex? Enim libero dolores nulla officiis
            quibusdam perferendis, veniam similique eligendi?
          </p>
          <Social>
            <a href="https://github.com/therealdrtroll">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/akshaykadam7991/">
              <i className="devicon-linkedin-plain colored"></i>
            </a>
            <a href="https://ar1pperk.medium.com/">
              <i className="fab fa-medium"></i>
            </a>
          </Social>
        </ParagraphWrapper>
        <Profile></Profile>
      </Content>
    </Wrapper>
  );
}

export default About;
