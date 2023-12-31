import { useLayoutEffect } from "react";

import MealIsList from "../components/MealIsList/MealIsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.
      setOptions({
        title: categoryTitle,
      });
  }, [catId, navigation]);

  return <MealIsList items={displayMeals} />
}

export default MealsOverviewScreen;

