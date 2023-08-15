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
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    zIndex: 3,
    alignSelf: "center",
    top: 10,
    width: "95%",
    borderRadius: 8,

    backgroundColor: Colors.secondary,

    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    shadowColor: Colors.black,
  },
  mainTitle: {
    padding: 20,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    ...Fonts.concertOneTitle,
    color: Colors.backgroundDark,
    alignSelf: "center",
    maxWidth: "80%",
  },
  carrouselContainer: {
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: Colors.background,
    flex: 1,
  },
  carrousel: {
    overflow: "visible",
    marginTop: "60%",
  },
  menuNull: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuNullText: {
    textShadowColor: Colors.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    ...Fonts.concertOneTitle,
    textAlign: "center",
    color: Colors.secondary,
    padding: 40,
  },
  goBackButton: {
    margin: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 16,
    alignSelf: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.backgroundDark,
  },
  goBackIcon: {
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: Colors.secondary,
  },
});
