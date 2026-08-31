import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import CategorySelector from "@/components/CategorySelector";
import { Colors } from "@/constants/colors";
import { ExpenseCategories } from "@/constants/expense-categories";
import { saveTransaction } from "@/services/storage";
import { addExpenseStyles } from "@/styles/add-expense.styles";
import { Transaction } from "@/types/transaction";

export default function AddExpenseScreen() {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSave = async () => {
    if (!descripcion.trim()) {
      alert("Ingresa una descripción");
      return;
    }

    if (!monto.trim()) {
      alert("Ingresa un monto");
      return;
    }

    if (!categoria.trim()) {
      alert("Selecciona una categoría");
      return;
    }

    const montoNumerico = Number(monto);

    if (isNaN(montoNumerico) || montoNumerico <= 0) {
      alert("Ingresa un monto válido");
      return;
    }

    const nuevoMovimiento: Transaction = {
      id: Date.now().toString(),
      description: descripcion.trim(),
      amount: montoNumerico,
      type: "expense",
      category: categoria.trim(),
    };

    await saveTransaction(nuevoMovimiento);

    alert("Gasto guardado correctamente");

    router.replace("/");
  };

  return (
    <ScrollView
      style={addExpenseStyles.screen}
      contentContainerStyle={addExpenseStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        style={addExpenseStyles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={addExpenseStyles.backButtonText}>‹ Volver</Text>
      </Pressable>

      <Text style={addExpenseStyles.title}>Nuevo gasto</Text>

      <Text style={addExpenseStyles.subtitle}>
        Registra en qué utilizaste tu dinero
      </Text>

      <View style={addExpenseStyles.form}>
        <Text style={addExpenseStyles.label}>Descripción</Text>

        <TextInput
          style={addExpenseStyles.input}
          placeholder="Ej. Almuerzo"
          placeholderTextColor={Colors.light.textLight}
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <Text style={addExpenseStyles.label}>Monto</Text>

        <View style={addExpenseStyles.amountContainer}>
          <Text style={addExpenseStyles.currency}>S/</Text>

          <TextInput
            style={addExpenseStyles.amountInput}
            placeholder="0.00"
            placeholderTextColor={Colors.light.textLight}
            keyboardType="decimal-pad"
            value={monto}
            onChangeText={setMonto}
          />
        </View>

        <Text style={addExpenseStyles.label}>Categoría</Text>

        <CategorySelector
          categories={ExpenseCategories}
          selectedCategory={categoria}
          onSelect={setCategoria}
        />

        <Pressable style={addExpenseStyles.button} onPress={handleSave}>
          <Text style={addExpenseStyles.buttonText}>Guardar gasto</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
