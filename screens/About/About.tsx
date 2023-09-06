// React
import { View, Text, ScrollView } from "react-native";
import ProfileCard from "../../components/Cards/ProfileCard/ProfileCard";
import { styles } from "./About.style";

const persons = [
  {
    name: "Stiven Segura",
    age: 20,
    role: "Software Engineer",
  },
  {
    name: "Jose Pablo Granados",
    age: 20,
    role: "Software Engineer",
  },
  {
    name: "Jose Pablo Granados",
    age: 20,
    role: "Software Engineer",
  },
  {
    name: "Jose Pablo Granados",
    age: 20,
    role: "Software Engineer",
  },
];

const About: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {persons.map((person, index) => {
          return <ProfileCard key={index} {...person} />;
        })}
      </View>
    </ScrollView>
  );
};
export default About;
