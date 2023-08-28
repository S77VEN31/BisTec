// React
import {
  View,
  Dimensions,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./RestaurantCard.style";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// Components
import Carousel from "react-native-reanimated-carousel";

type RestaurantData = {
  name: string;
  state: boolean;
  schedule: string;
  images: string[];
  id: number;
};

const RestaurantCard: React.FC<RestaurantData> = ({
  images,
  name,
  state,
  schedule,
  id,
}) => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const goToMenu = () => {
    (
      navigation.navigate as (
        screen: string,
        params: { restaurantId: number }
      ) => void
    )("Menu", { restaurantId: id });
  };

  return (
    <View style={styles.mainContainer}>
      <Carousel
        style={styles.carousel}
        autoPlay={true}
        data={images}
        width={width - 80}
        height={height / 4}
        renderItem={({ item }) => (
          <ImageBackground
            style={[{ minWidth: width - 80 }, styles.carouselImage]}
            //@ts-ignore
            source={item}
            resizeMode="cover"
          />
        )}
      />
      <View style={styles.restaurantData}>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text>{state ? "Abierto" : "Cerrado"}</Text>
          <Text>{schedule}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button}>
            <Ionicons name="location-outline" style={styles.buttonText} />
          </Pressable>
          <Pressable onPress={() => goToMenu()} style={styles.button}>
            <Entypo name="dots-three-vertical" style={styles.buttonText} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default RestaurantCard;
