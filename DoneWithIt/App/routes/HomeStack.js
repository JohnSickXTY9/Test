import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const screens = {
  "A New Frontier": {
    screen: WelcomeScreen,
  },
  ViewImage: {
    screen: ViewImageScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
