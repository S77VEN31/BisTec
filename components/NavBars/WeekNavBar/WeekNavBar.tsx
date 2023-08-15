// React Native
import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./WeekNavBar.style";
// Constants
import { General } from "../../../constants/General";

type WeekNavBarProps = {
  currentDay: string;
};

const WeekNavBar: React.FC<WeekNavBarProps> = ({ currentDay }) => {
  const navigation = useNavigation();
  const { daysOfWeek } = General;

  return (
    <View style={styles.barContainer}>
      {daysOfWeek.map((item, key) => {
        return (
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("MenuDetail", { givenDay: item });
            }}
            key={key}
          >
            <Text
              style={[styles.text, item === currentDay && styles.currentDay]}
            >
              {item[0]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default WeekNavBar;
