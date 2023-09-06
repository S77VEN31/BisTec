import { View, Text } from "react-native";
// Styles
import { styles } from "./ProfileCard.style";

const ProfileCard: React.FC = ({ name, age, role }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Text>aaaaaa aaaaa aaaa aaa</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age}</Text>
        <Text>{role}</Text>
      </View>
    </View>
  );
};
export default ProfileCard;
