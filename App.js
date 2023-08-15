// React Native
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// React
import * as React from "react";
// Fonts
import { useFonts } from "@expo-google-fonts/kanit";
import { fonts } from "./assets/fonts/fonts";
// Colors
import { Colors } from "./constants/Colors";
// Components
import StackNavigator from "./navigation/StackNavigation/StackNavigation";
import { StatusBar } from "expo-status-bar";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <StatusBar
        barStyle="light"
        backgroundColor={Colors.secondary}
      />
    </SafeAreaView>
  );
}
