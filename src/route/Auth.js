import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import SideBar from "../components/SideBar";

import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";

const Auth = createStackNavigator(
  {
    Home: Home,
    SignUp: SignUp
  },
  {
    headerMode: "none"
  }
);

export default Auth;
