import { Text, View } from "react-native";

import { transactionCardStyles } from "@/styles/transaction-card.styles";
import { Transaction } from "@/types/transaction";

type TransactionCardProps = {
  transaction: Transaction;
};

export default function TransactionCard({ transaction }: TransactionCardProps) {
  const isIncome = transaction.type === "income";

  return (
    <View style={transactionCardStyles.card}>
      <View style={transactionCardStyles.left}>
        <View style={transactionCardStyles.iconContainer}>
          <Text style={transactionCardStyles.icon}>
            {isIncome ? "💰" : "💸"}
          </Text>
        </View>

        <View>
          <Text style={transactionCardStyles.description}>
            {transaction.description}
          </Text>

          <Text style={transactionCardStyles.category}>
            {transaction.category}
          </Text>
        </View>
      </View>

      <Text
        style={[
          transactionCardStyles.amount,
          isIncome
            ? transactionCardStyles.income
            : transactionCardStyles.expense,
        ]}
      >
        {isIncome ? "+" : "-"} S/ {transaction.amount.toFixed(2)}
      </Text>
    </View>
  );
}
