import { View, Text } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";

export default function Header({ headertext, headerIcon }) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 22,
          fontWeight: "700",
        }}
      >
        {headertext}
      </Text>
      <Icon name={headerIcon} size={24} color={"#f96163"} />
    </View>
  );
}
