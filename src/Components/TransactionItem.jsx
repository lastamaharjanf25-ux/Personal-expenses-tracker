function TransactionItem({ transaction, onDelete }) {
  const { id, description, amount, category, type, date } = transaction;

  return (
    <li className={`item ${type}`}>
      <div className="item-info">
        <strong>{description}</strong>
        <small>
          {category} • {date}
        </small>
      </div>
      <span className="item-amount">
        {type === "income" ? "+" : "-"}${amount.toFixed(2)}
      </span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        ✕
      </button>
    </li>
  );
}

export default TransactionItem;