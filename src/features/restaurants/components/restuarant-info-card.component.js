import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
      <Card style={styles.card}>
        <Card.Cover
          style={styles.cover}
          source={{
            uri: "https://picsum.photos/700",
          }}
        />

        <Text style={styles.title}>{name}</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
