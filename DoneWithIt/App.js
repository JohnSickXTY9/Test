import React from "react";
import { useDimensions } from "@react-native-community/hooks";

import Navigator from "./App/routes/HomeStack";

export default function App() {
  const { height, width } = useDimensions().window;
  const landscape = width > height;
  const portrait = !landscape;

  return <Navigator />;
}
