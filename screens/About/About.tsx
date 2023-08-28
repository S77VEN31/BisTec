// React
import { View, ScrollView } from "react-native";
// Styles
import { styles } from "./About.style";
// Enumerables
import { AboutConstants } from "../../constants/screens/About/AboutConstants";
// Components
import RestaurantCard from "../../components/Cards/RestaurantCard/RestaurantCard";

const About: React.FC = () => {
  const { restaurants } = AboutConstants;
  return (
    <ScrollView>
      <View style={styles.container}>
        {restaurants.map(({ ...props }, key) => {
          return <RestaurantCard key={key} {...props} />;
        })}
      </View>
    </ScrollView>
  );
};
export default About;
