import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Splash from "~/pages/Splash";
import Login from "~/pages/Login";

const Navigation = ({ initialRouteName }) => {
  function getSplashNavigator() {
    return createStackNavigator({
      Splash: {
        screen: Splash,
        navigationOptions: () => ({
          header: null
        })
      }
    });
  }

  function getAuthNavigator() {
    return createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: () => ({
          header: null
        })
      }
    });
  }

  const Routes = createAppContainer(
    createSwitchNavigator(
      {
        SplashNavigator: getSplashNavigator(),
        AuthNavigator: getAuthNavigator()
      },
      {
        initialRouteName
      }
    )
  );
  return <Routes />;
};

export default Navigation;
