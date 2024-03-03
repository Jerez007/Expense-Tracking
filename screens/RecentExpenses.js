import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDates } from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const RecentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDates(today, 7);

    return (expense.date > date7DaysAgo) && (expense.date <= today);
  });

  return <ExpensesOutput expenses={RecentExpenses} expensesPeriod="Last 7 Days" fallbackTest="No expenses registered for the last 7 days." />
}

export default RecentExpenses

const styles = StyleSheet.create({})