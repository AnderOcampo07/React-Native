import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";

import BalanceCard from "@/components/BalanceCard";
import TransactionCard from "@/components/TransactionCard";
import { getTransactions } from "@/services/storage";
import { homeStyles } from "@/styles/home.styles";
import { Transaction } from "@/types/transaction";

export default function HomeScreen() {
  const [movimientos, setMovimientos] = useState<Transaction[]>([]);

  useFocusEffect(
    useCallback(() => {
      const loadTransactions = async () => {
        const transactions = await getTransactions();
        setMovimientos(transactions);
      };

      loadTransactions();
    }, []),
  );

  const ingresos = movimientos
    .filter((movimiento) => movimiento.type === "income")
    .reduce((total, movimiento) => total + movimiento.amount, 0);

  const gastos = movimientos
    .filter((movimiento) => movimiento.type === "expense")
    .reduce((total, movimiento) => total + movimiento.amount, 0);

  const saldo = ingresos - gastos;

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Hola 👋</Text>

      <Text style={homeStyles.subtitle}>Este es tu resumen financiero</Text>

      <BalanceCard balance={saldo} income={ingresos} expenses={gastos} />

      <Text style={homeStyles.sectionTitle}>Movimientos recientes</Text>

      <FlatList
        data={movimientos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TransactionCard transaction={item} />}
      />

      <View style={homeStyles.actionContainer}>
        <Link href="/add-income" style={homeStyles.incomeButton}>
          <Text style={homeStyles.actionText}>+ Ingreso</Text>
        </Link>

        <Link href="/add-expense" style={homeStyles.expenseButton}>
          <Text style={homeStyles.actionText}>+ Gasto</Text>
        </Link>
      </View>
    </View>
  );
}
