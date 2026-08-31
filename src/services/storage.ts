import AsyncStorage from "@react-native-async-storage/async-storage";

import { Transaction } from "@/types/transaction";

const TRANSACTIONS_KEY = "@control-gastos/transactions";

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const data = await AsyncStorage.getItem(TRANSACTIONS_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("Error al obtener los movimientos:", error);
    return [];
  }
};

export const saveTransaction = async (
  transaction: Transaction,
): Promise<void> => {
  try {
    const transactions = await getTransactions();

    const updatedTransactions = [...transactions, transaction];

    await AsyncStorage.setItem(
      TRANSACTIONS_KEY,
      JSON.stringify(updatedTransactions),
    );
  } catch (error) {
    console.error("Error al guardar el movimiento:", error);
  }
};
