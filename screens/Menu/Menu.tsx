// React
import React, { useState, useEffect } from "react";
// React Native
import { Text, View, Dimensions } from "react-native";
// Styles
import { styles } from "./Menu.style";
// Globals
import { getMenuByDay } from "../../globals/handleMenus/getMenuByDay";
import { getCurrentDay } from "../../globals/handleDays/getCurrentDay";
// Components
import Carousel from "react-native-reanimated-carousel";
import DailyMenuCard from "../../components/Cards/DailyMenuCard/DailyMenuCard";
import WeekNavBar from "../../components/NavBars/WeekNavBar/WeekNavBar";

const Menu: React.FC = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [day, setDay] = useState(getCurrentDay());
  const [menuForGivenDay, setMenuForGivenDay] = useState(getMenuByDay(day));
  useEffect(() => {
    const updatedMenu = getMenuByDay(day);
    setMenuForGivenDay(updatedMenu);
  }, [day]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <View style={styles.mainTitleContent}>
          <Text style={styles.mainTitle}>{day}</Text>
        </View>
        <WeekNavBar day={day} setDay={setDay} />
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
            //onSnapToItem={(index) => console.log("current index:", height)}
          />
        </View>
      )}
    </View>
  );
};
export default Menu;
