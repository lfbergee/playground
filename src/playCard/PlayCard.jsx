import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { Slide } from "../components";
import { GridRow, GridCol, List, ListItem } from "../baseComponents";
import bg from "./bg.png";
import me from "./me.jpg";

const Card = styled.div`
  overflow: hidden;
  border: 8px solid yellow;
  border-radius: 4px;
  height: 600px;
  width: 400px;
  background-color: peachpuff;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  transition: transform 0.6s;
  transform-style: preserve-3d;
  background-image: url(${bg});
  background-repeat: no-repeat;
  color: darkslategray;
  font-family: "Kanit", sans-serif;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Backside = styled.div`
  transform: rotateY(180deg);
  transition: opacity 1.6s;
  opacity: ${({ flipped }) => (flipped ? "1" : "0")};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.6s;
  opacity: ${({ flipped }) => (flipped ? "0" : "1")};
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: darkslategray;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Star = styled.div`
  z-index: 1;
  background: yellowgreen;
  width: 80px;
  height: 80px;
  position: relative;
  margin: 30px;
  text-align: center;
  transition: transform 0.6s;
  transform: rotate(20deg);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    background: yellowgreen;
    transform: rotate(135deg);
  }
`;

const Developer = styled.aside`
  z-index: 2;
  position: absolute;
  top: 50px;
  left: 30px;
  height: 40px;
  width: 80px;
  text-align: center;
  transform: rotate(-7deg);
  color: yellow;
  font-weight: bolder;
  text-shadow: 0 0 3px #ff0000;
`;

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: absolute;
  bottom: -25px;
  left: -20px;
  width: 110%;
  transform: rotate(-7deg);
  padding-bottom: 35px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Me = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url(${me});
  background-repeat: no-repeat;
`;

const FunFact = styled.aside`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  color: yellow;
  font-weight: bolder;
  text-shadow: 0 0 3px #ff0000;
  background-color: rgba(0, 0, 0, 0.8);
`;

const PlayCard = () => {
  const [flipped, flipCard] = React.useState(false);
  return (
    <Slide withImage>
      <GridRow justify="center">
        <GridCol justify="center">
          <Card flipped={flipped} onClick={() => flipCard(!flipped)}>
            <Front flipped={flipped}>
              <Star />
              <Developer>Front end developer</Developer>
              <Me />
              <Title>
                {!flipped && (
                  <Typist>
                    <Typist.Delay ms={500} />
                    <span>Leiv Fredhuihn B</span>
                    <Typist.Backspace count={11} delay={200} />
                    <span>Fredrik Berge</span>
                  </Typist>
                )}
              </Title>
            </Front>
            <Backside flipped={flipped}>
              <FunFact>
                <iframe
                  title="video"
                  width="400"
                  height="225"
                  src="https://www.youtube.com/embed/TBa1p2YJwzQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <Heading>Have driven a real car in VR</Heading>
              </FunFact>
              <Box>
                {flipped && (
                  <Typist>
                    <Typist.Delay ms={500} />
                    <Heading>About me</Heading>
                    <List>
                      <ListItem customDot="fire">
                        Javascript all the things
                      </ListItem>
                      <ListItem customDot="fire">React & Node.js</ListItem>
                      <ListItem customDot="fire">
                        Wierd mechanical keyboards
                      </ListItem>
                    </List>
                  </Typist>
                )}
              </Box>
            </Backside>
          </Card>
        </GridCol>
      </GridRow>
    </Slide>
  );
};

export default PlayCard;
