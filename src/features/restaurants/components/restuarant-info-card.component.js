import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestuarantCard = styled(Card)`
  background-color: white;
`;

const RestuarantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "some res",
    icon = "",
    photos = [
      "https://www.foodiesfeed.com/free-food-photo/nicely-served-burgers/",
    ],
    address = "patel garden",
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = "true",
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestuarantCard>
        <RestuarantCardCover
          source={{
            uri: "https://picsum.photos/700",
          }}
        />
        <Info>
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>

          <Address>{address}</Address>
        </Info>
      </RestuarantCard>
    </>
  );
};
