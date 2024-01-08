import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

export default function RecipeListScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 16,
        marginTop: 35,
      }}
    >
      <View></View>
      <Header headertext={"Hi, Salah"} headerIcon={"bell-o"} />
      <SearchFilter icon={"search"} placeholder={"enter your fav recipe "} />
      <View
        style={{
          marginTop: 12,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Categories
        </Text>
        <CategoriesFilter />
      </View>

      <View
        style={{
          marginTop: 2,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Recipes
        </Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
}
