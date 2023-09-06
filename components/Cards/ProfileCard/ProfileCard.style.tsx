import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Fonts } from "../../../constants/Fonts";
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    margin: 20,
    overflow: "hidden",
    display: "flex",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  textContainer: {
    display: "flex",
    padding: 20,
    flex: 1,
  },
  name: {
    backgroundColor: "red",
    fontSize: 20,
    ...Fonts.concertOneTitle,
    color: Colors.primary,
  },
  age: {
    backgroundColor: "blue",
    fontSize: 16,
    ...Fonts.concertOneSubtitle,
    color: Colors.secondary,
  },
});
