// Tab Screens
import Menu from "../screens/Menu/Menu";
import About from "../screens/About/About";

type TabScreenProps = {
  name: string;
  component: React.FC;
};

export const TabNavigationConstants = {
  tabScreenProps: [
    {
      name: "Menu",
      component: Menu,
    },
    {
      name: "About",
      component: About,
    },
  ] as TabScreenProps[],
  tabMainNavBar: [
    {
      name: "Menu",
      icon: "restaurant-menu",
    },
    {
      name: "About",
      icon: "info",
    },
  ],
};
