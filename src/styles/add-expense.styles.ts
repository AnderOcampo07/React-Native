import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const addExpenseStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.light.text,
  },

  subtitle: {
    fontSize: 15,
    color: Colors.light.textSecondary,
    marginTop: 6,
    marginBottom: 30,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 8,
  },

  input: {
    height: 54,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 22,
  },

  amountContainer: {
    height: 64,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 22,
  },

  currency: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.light.primary,
    marginRight: 10,
  },

  amountInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: "600",
    color: Colors.light.text,
  },

  button: {
    height: 56,
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: Colors.light.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 18,
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.primary,
  },
});
