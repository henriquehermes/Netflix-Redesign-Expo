import React, { useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";

import { ActivityIndicator } from "react-native";
import { Container, Netflix } from "./styles";

export default function Splash({ navigation }) {
  useEffect(() => {
    async function getUserLogged() {
      const response = await AsyncStorage.getItem("User");
      if (response) {
        navigation.navigate("AppNavigator");
      } else {
        navigation.navigate("AuthNavigator");
      }
    }
    getUserLogged();
  }, [navigation]);

  return (
    <Container>
      <Netflix />
      <ActivityIndicator size="large" color="#D7240F" />
    </Container>
  );
}

Splash.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Splash.defaultProps = {
  navigation: {}
};
