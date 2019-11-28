import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import postLogin from "~/services/LoginServices";
import { Container, Netflix, Body, Background } from "./styles";
import Button from "~/components/Button";
import TextInput from "~/components/Input";

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  async function loginInApp() {
    setIsLoading(true);
    const response = await postLogin(email, password);

    if (response) {
      navigation.navigate("AppNavigator");
      return;
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Netflix />
      <Body>
        <TextInput
          testID="testEmail"
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          testID="testPassword"
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          type="password"
          secureTextEntry
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#D7240F" />
        ) : (
          <Button
            onPress={() => loginInApp()}
            label="Sign In"
            style={{ marginTop: 15 }}
          />
        )}
      </Body>
      <Background />
    </Container>
  );
}

Login.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Login.defaultProps = {
  navigation: {}
};
