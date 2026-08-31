import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const categorySelectorStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 30,
  },

  category: {
    width: "47%",
    minHeight: 80,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  categorySelected: {
    backgroundColor: Colors.light.primaryLight,
    borderColor: Colors.light.primary,
    borderWidth: 2,
  },

  icon: {
    fontSize: 25,
    marginBottom: 5,
  },

  name: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.light.textSecondary,
  },

  nameSelected: {
    color: Colors.light.primaryDark,
  },
});
