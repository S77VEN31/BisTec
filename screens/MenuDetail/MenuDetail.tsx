// React Native
import { View, Dimensions, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./MenuDetail.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Globals
import { getMenuByDay } from "../../globals/handleMenus/getMenuByDay";
// Components
import Carousel from "react-native-reanimated-carousel";
import DailyMenuCard from "../../components/Cards/DailyMenuCard/DailyMenuCard";

const MenuDetail: React.FC = ({ route }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const navigation = useNavigation();
  const { givenDay } = route.params;
  const menuForGivenDay = getMenuByDay(givenDay);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <Pressable
          style={styles.goBackButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={30}
            style={styles.goBackIcon}
          />
        </Pressable>
        <Text style={styles.mainTitle}>Menu del {givenDay}</Text>
      </View>
      {menuForGivenDay === null ? (
        <View style={styles.menuNull}>
          <Text style={styles.menuNullText}>
            No hay menu para el dia de hoy
          </Text>
        </View>
      ) : (
        <View style={styles.carrouselContainer}>
          <Carousel
            loop
            autoFillData={true}
            autoPlay={true}
            mode="parallax"
            modeConfig={{
              parallaxScrollingOffset: height / 4,
              parallaxScrollingScale: 0.9,
              parallaxAdjacentItemScale: 0.7,
            }}
            vertical={true}
            width={width}
            style={styles.carrousel}
            height={height / 2}
            data={[...menuForGivenDay.menus, ...menuForGivenDay.menus]}
            scrollAnimationDuration={5000}
            renderItem={({ item }) => (
              <DailyMenuCard time={item.time} menu={item.menu} />
            )}
          />
        </View>
      )}
    </View>
  );
};
export default MenuDetail;
