import { useState } from "react";
import Header from "./components/Header";
import BalanceSummary from "./components/BalanceSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

const CATEGORIES = ["Food", "Transport", "Shopping", "Bills", "Salary", "Other"];

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Salary", amount: 1000, category: "Salary", type: "income", date: "2026-09-01" },
    { id: 2, description: "Groceries", amount: 150, category: "Food", type: "expense", date: "2026-09-05" },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <BalanceSummary transactions={transactions} />
      <TransactionForm onAdd={addTransaction} categories={CATEGORIES} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;