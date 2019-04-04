import React from "react";
import styled from "styled-components";
import { Slide } from "../components";
import { GridRow, GridCol, List, ListItem } from "../baseComponents";
import bg from "./bg.png";

const Card = styled.div`
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
  height: 60px;
  background-color: darkslategray;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Star = styled.div`
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
  bottom: 0;
  width: 100%;
`;

const Heading = styled.h2`
    text-align: center;
`

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
              <Title>Leiv Fredrik Berge</Title>
            </Front>
            <Backside flipped={flipped}>
              <Box>
                <Heading>About me</Heading>
                <List>
                  <ListItem customDot="fire">Javascript all the things</ListItem>
                  <ListItem customDot="fire">React & Node.js</ListItem>
                  <ListItem customDot="fire">Wierd mechanical keyboards</ListItem>
                </List>
              </Box>
            </Backside>
          </Card>
        </GridCol>
      </GridRow>
    </Slide>
  );
};

export default PlayCard;
