import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: Colors.light.background,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.light.text,
  },

  subtitle: {
    fontSize: 15,
    color: Colors.light.textSecondary,
    marginTop: 5,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 15,
  },

  addButton: {
    backgroundColor: Colors.light.primary,
    padding: 16,
    borderRadius: 14,
    textAlign: "center",
    color: Colors.light.white,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
  },

  actionContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginBottom: 15,
  },

  incomeButton: {
    flex: 1,
    backgroundColor: Colors.light.primaryLight,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  expenseButton: {
    flex: 1,
    backgroundColor: Colors.light.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  actionText: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.white,
  },
});
