import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import MainApp from "./src/screens/MainApp";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Fonts } from "./src/utils/fontsObject";

export default function App() {
  
  let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.root}>
      <MainApp />
      {/* <Text
        style={{ color: "white", fontSize: 22, fontFamily: "roboto-italic" }}
      >
        Hola
      </Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
});
