// React Native
import { Text, View, Dimensions } from "react-native";
// Styles
import { styles } from "./Menu.style";
// Constants
import { General } from "../../constants/General";
// Globals
import { getMenuByDay } from "../../globals/handleMenus/getMenuByDay";
// Components
import Carousel from "react-native-reanimated-carousel";
import DailyMenuCard from "../../components/Cards/DailyMenuCard/DailyMenuCard";
import WeekNavBar from "../../components/NavBars/WeekNavBar/WeekNavBar";

function getEnglishDayOfWeek() {
  const { daysOfWeek } = General;
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

const Menu: React.FC = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const givenDay = getEnglishDayOfWeek();
  const menuForGivenDay = getMenuByDay(givenDay);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderContent}>
          <Text style={styles.mainTitle}>Bienvenido al MenuTec</Text>
          <Text style={styles.mainSutitle}>Menu del {givenDay}</Text>
        </View>
      </View>
      <WeekNavBar currentDay={givenDay} />
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
            //onSnapToItem={(index) => console.log("current index:", height)}
          />
        </View>
      )}
    </View>
  );
};
export default Menu;
