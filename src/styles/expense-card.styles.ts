import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const expenseCardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: Colors.light.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  icon: {
    fontSize: 21,
  },

  description: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
  },

  category: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginTop: 3,
  },

  amount: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.expense,
    marginLeft: 10,
  },
});
