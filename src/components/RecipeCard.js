import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { colors, recipeList } from "../screens/Constant";
import Icon from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
export default function RecipeCard() {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetails", { item: item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
              marginBottom: index === recipeList.length - 1 ? 70 : 0,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 150,
                height: 150,
                resizeMode: "center",
              }}
            />
            <Text>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    marginRight: 4,
                  }}
                >
                  {item.rating}
                </Text>
                <Icon name="star" size={16} color={colors.COLOR_PRIMARY} />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
