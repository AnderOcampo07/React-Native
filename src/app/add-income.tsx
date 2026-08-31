import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput } from "react-native";

import CategorySelector from "@/components/CategorySelector";
import { Colors } from "@/constants/colors";
import { ExpenseCategories } from "@/constants/expense-categories";
import { saveTransaction } from "@/services/storage";
import { addIncomeStyles } from "@/styles/add-income.styles";
import { Transaction } from "@/types/transaction";

export default function AddIncomeScreen() {
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

    const nuevoIngreso: Transaction = {
      id: Date.now().toString(),
      description: descripcion.trim(),
      amount: montoNumerico,
      type: "income",
      category: categoria.trim(),
    };

    await saveTransaction(nuevoIngreso);

    alert("Ingreso guardado correctamente");

    router.replace("/");
  };

  return (
    <ScrollView
      style={addIncomeStyles.screen}
      contentContainerStyle={addIncomeStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        style={addIncomeStyles.backButton}
        onPress={() => router.replace("/")}
      >
        <Text style={addIncomeStyles.backButtonText}>‹ Volver</Text>
      </Pressable>

      <Text style={addIncomeStyles.title}>Nuevo ingreso</Text>

      <Text style={addIncomeStyles.subtitle}>
        Registra el dinero que recibiste
      </Text>

      <Text style={addIncomeStyles.label}>Descripción</Text>

      <TextInput
        style={addIncomeStyles.input}
        placeholder="Ej. Sueldo"
        placeholderTextColor={Colors.light.textLight}
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Text style={addIncomeStyles.label}>Monto</Text>

      <TextInput
        style={addIncomeStyles.input}
        placeholder="Ej. 1500.00"
        placeholderTextColor={Colors.light.textLight}
        keyboardType="decimal-pad"
        value={monto}
        onChangeText={setMonto}
      />

      <Text style={addIncomeStyles.label}>Categoría</Text>

      <CategorySelector
        categories={ExpenseCategories}
        selectedCategory={categoria}
        onSelect={setCategoria}
      />

      <Pressable style={addIncomeStyles.button} onPress={handleSave}>
        <Text style={addIncomeStyles.buttonText}>Guardar ingreso</Text>
      </Pressable>
    </ScrollView>
  );
}
