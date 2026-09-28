function BalanceSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <section className="summary">
      <div className="summary-card">
        <h3>Balance</h3>
        <p className={balance < 0 ? "negative" : ""}>${balance.toFixed(2)}</p>
      </div>
      <div className="summary-card">
        <h3>Income</h3>
        <p className="positive">${income.toFixed(2)}</p>
      </div>
      <div className="summary-card">
        <h3>Expenses</h3>
        <p className="negative">${expenses.toFixed(2)}</p>
      </div>
    </section>
  );
}

export default BalanceSummary;