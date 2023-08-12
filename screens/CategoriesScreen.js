import { View, FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function presshandler() {
        navigation.navigate("MealsOverview", {
          categoryId: itemData.item.id,
        })
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presshandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={"2"}
    />
  );
}

export default CategoriesScreen;
