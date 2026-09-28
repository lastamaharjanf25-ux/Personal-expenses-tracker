import { useState } from "react";

function TransactionForm({ onAdd, categories }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [type, setType] = useState("expense");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || Number(amount) <= 0) return;

    onAdd({
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      category,
      type,
      date,
    });

    setDescription("");
    setAmount("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        min="0"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;