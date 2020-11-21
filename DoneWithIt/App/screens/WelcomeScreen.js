import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/globalStyles";

function WelcomeScreen({ navigation }) {
  const loginHandler = () => {
    navigation.push("ViewImage");
  };

  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Because Fuck You, That's Why</Text>
      </View>
      <TouchableOpacity onPress={loginHandler} style={styles.loginButton} />
      <TouchableOpacity style={styles.registerButton} />
    </ImageBackground>
  );
}

export default WelcomeScreen;
