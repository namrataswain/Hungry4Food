import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestuarantCard = styled(Card)`
  background-color: white;
`;

const RestuarantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
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
  return (
    <>
      <RestuarantCard>
        <RestuarantCardCover
          source={{
            uri: "https://picsum.photos/700",
          }}
        />
        <Title>{name}</Title>
      </RestuarantCard>
    </>
  );
};
