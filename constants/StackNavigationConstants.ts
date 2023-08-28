// Stack Screens
import TabNavigation from '../navigation/TabNavigation/TabNavigation'; // Navigation
import MenuDetail from '../screens/MenuDetail/MenuDetail';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type StackScreenProps = {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
};

export const StackNavigationConstants = {
  stackScreenProps: [
    {
      name: 'TabNavigation',
      component: TabNavigation,
      options: { headerShown: false },
    },
    {
      name: 'MenuDetail',
      component: MenuDetail,
      options: { headerShown: false, animation: 'slide_from_bottom' },
    },
  ] as StackScreenProps[],
};