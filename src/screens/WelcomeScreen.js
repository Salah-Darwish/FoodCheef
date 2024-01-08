import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text
        style={{
          color: "#f96163",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        40K + Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecipeList");
        }}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
          marginBottom: 60,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
