import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestuarantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestuarantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestuarantListContainer>
      <RestuarantInfoCard />
    </RestuarantListContainer>
  </SafeArea>
);
