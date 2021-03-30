import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestuarantsScreen } from "./src/features/restaurants/screen/restaurant.screen";
import { theme } from "./src/infrastructure/Theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
