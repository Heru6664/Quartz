import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";

import SideBar from "../components/SideBar";

import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";

const Auth = createStackNavigator(
  {
    Home: Home
  },
  {
    headerMode: "none"
  }
);

export default Auth;
