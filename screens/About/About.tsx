// React
import { View, Dimensions, Text, Pressable } from "react-native";
// Styles
import { styles } from "./About.style";

import Carousel from "react-native-reanimated-carousel";

const About: React.FC = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Carousel
          autoPlay={true}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          width={width}
          height={height / 2}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "red",
                height: 200,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                width: width - 40,
              }}
            >
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default About;
