// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  barContainer: {
    zIndex: 1,
    display: "flex",
    overflow: "hidden",
    flexDirection: "row",
    height: 65,
    alignItems: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: Colors.secondary,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  button: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    ...Fonts.textBold,
    textTransform: "uppercase",
    color: Colors.backgroundDark,
  },
  currentDay: {
    color: Colors.primary,
  },
});
