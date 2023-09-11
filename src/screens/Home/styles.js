import { StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
  container: {
    paddingVertical: statusBarHeight,
    paddingHorizontal: 8,
  }
})