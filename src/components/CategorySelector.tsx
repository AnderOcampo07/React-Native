import { Pressable, Text, View } from "react-native";

import { categorySelectorStyles } from "@/styles/category-selector.styles";

type Category = {
  id: string;
  name: string;
  icon: string;
};

type CategorySelectorProps = {
  categories: Category[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CategorySelector({
  categories,
  selectedCategory,
  onSelect,
}: CategorySelectorProps) {
  return (
    <View style={categorySelectorStyles.container}>
      {categories.map((category) => {
        const selected = selectedCategory === category.name;

        return (
          <Pressable
            key={category.id}
            style={[
              categorySelectorStyles.category,
              selected && categorySelectorStyles.categorySelected,
            ]}
            onPress={() => onSelect(category.name)}
          >
            <Text style={categorySelectorStyles.icon}>{category.icon}</Text>

            <Text
              style={[
                categorySelectorStyles.name,
                selected && categorySelectorStyles.nameSelected,
              ]}
            >
              {category.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
