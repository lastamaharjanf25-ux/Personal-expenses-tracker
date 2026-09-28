import { useState, useEffect } from "react";
import Header from "./components/Header";
import BalanceSummary from "./components/BalanceSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

const CATEGORIES = ["Food", "Transport", "Shopping", "Bills", "Salary", "Other"];

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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