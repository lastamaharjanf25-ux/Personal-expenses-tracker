import { useState } from "react";
import Header from "./Components/Header";
import BalanceSummary from "./Components/BalanceSummary";
import TransactionForm from "./Components/TransactionForm";
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

  return (
    <div className="app">
      <Header />
      <BalanceSummary transactions={transactions} />
      <TransactionForm onAdd={addTransaction} categories={CATEGORIES} />
    </div>
  );
}

export default App;