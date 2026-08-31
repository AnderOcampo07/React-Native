import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

type BalanceCardProps = {
  balance: number;
  income: number;
  expenses: number;
};

export default function BalanceCard({
  balance,
  income,
  expenses,
}: BalanceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>💰</Text>
        </View>

        <Text style={styles.label}>Saldo disponible</Text>
      </View>

      <Text style={styles.balance}>S/ {balance.toFixed(2)}</Text>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Ingresos</Text>
          <Text style={styles.income}>+ S/ {income.toFixed(2)}</Text>
        </View>

        <View>
          <Text style={styles.footerLabel}>Gastos</Text>
          <Text style={styles.expense}>- S/ {expenses.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.primary,
    borderRadius: 24,
    padding: 22,
    marginBottom: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  icon: {
    fontSize: 20,
  },

  label: {
    color: Colors.light.white,
    fontSize: 16,
    fontWeight: "600",
  },

  balance: {
    color: Colors.light.white,
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 24,
  },

  footer: {
    flexDirection: "row",
    gap: 40,
  },

  footerLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 13,
    marginBottom: 4,
  },

  income: {
    color: Colors.light.white,
    fontSize: 15,
    fontWeight: "600",
  },

  expense: {
    color: Colors.light.white,
    fontSize: 15,
    fontWeight: "600",
  },
});
