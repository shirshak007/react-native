import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentScreen from "./src/screens/componentScreen";
import listScreen from "./src/screens/listScreen";
import imageScreen from "./src/screens/imageScreen";
import counterScreen from "./src/screens/counterScreen";
import colorScreen from "./src/screens/colorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentScreen,
    List: listScreen,
    Image: imageScreen,
    Counter: counterScreen,
    Color: colorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
