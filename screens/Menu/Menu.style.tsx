// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../constants/Colors";
// Fonts
import { Fonts } from "../../constants/Fonts";

export const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.background,
  },
  mainHeader: {
    backgroundColor: Colors.secondary,
    padding: 15,
    zIndex: 2,
  },
  mainHeaderContent: {
    backgroundColor: Colors.backgroundDark,
    padding: 10,
    borderRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  mainTitle: {
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    ...Fonts.concertOneTitle,
    color: Colors.secondary,
    textAlign: "center",
  },
  mainSutitle: {
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    ...Fonts.concertOneTitle,
    color: Colors.primary,
    textAlign: "center",
  },
  carrouselContainer: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: Colors.background,
    flex: 1,
  },
  carrousel: {
    marginTop: "35%",
    overflow: "visible",
  },
  menuNull: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuNullText: {
    ...Fonts.concertOneTitle,
    textAlign: "center",
    color: Colors.secondary,
    padding: 40,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    marginBottom: 75,
  },
});
