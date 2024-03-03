import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


const ExpensesOutput = ({ expenses, expensesPeriod, fallbackTest }) => {
  let content = <Text style={styles.infoText}>{fallbackTest}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  // period: {
  //   fontSize: 12,
  //   color: "grey",
  // },
  // sum: {
  //   fontSize: 16,
  //   color: "black",
  //   fontWeight: "bold",
  // },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  }
});
