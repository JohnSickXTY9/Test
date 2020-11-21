import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import styles from "../styles/globalStyles";

function ViewImageScreen({ navigation }) {
  const closeHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <TouchableOpacity style={styles.closeIcon} />
      <TouchableOpacity onPress={closeHandler} style={styles.deleteIcon} />
    </View>
  );
}

export default ViewImageScreen;
