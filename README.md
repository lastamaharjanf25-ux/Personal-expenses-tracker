# 💰 Personal Expense Tracker

A simple personal expense tracker built with React. It lets you log income and expenses, see your running balance, and filter or sort your transactions. All data is saved in your browser, so it is still there after a page refresh.


## Screenshots

### Add Transaction
![Add Transaction](./screenshots/add-transaction.png)

### Desktop View
![Desktop View](./screenshots/desktop-view.png)

### Mobile View
![Mobile View](./screenshots/mobile-view.png)

## Features

- Add transactions with a description, amount, type (income or expense), category, and date
- Running balance, total income, and total expenses shown in summary cards
- List of all transactions with a delete button on each entry
- Filter transactions by category
- Sort transactions by date (newest or oldest) or by amount (highest or lowest)
- Data is saved with `localStorage`, so it survives a page refresh
- Empty state message when there are no transactions
- Basic form validation (description is required and the amount must be greater than 0)
- Responsive layout that works on desktop and mobile

## Technologies Used

- [React](https://react.dev/) (functional components and hooks only)
- [Vite](https://vitejs.dev/) as the build tool
- JavaScript (ES6+)
- Plain CSS (no CSS framework)
- Browser `localStorage` for saving data
- Git and GitHub for version control

## React Concepts Used

- **Components and props:** the app is split into reusable components that receive data as props and send events up with callback functions
- **`useState`:** manages the transactions, the filter, the sort option, and the form inputs
- **`useEffect`:** saves the transactions to `localStorage` whenever they change
- **List rendering:** `.map()` with unique `key` props
- **Controlled inputs:** every form field uses `value` and `onChange`
- **Conditional rendering:** the empty state message and the income/expense styling

## Project Structure

```
src/
├── components/
│   ├── Header.jsx            # App title and tagline
│   ├── BalanceSummary.jsx    # Balance, income, and expense cards
│   ├── TransactionForm.jsx   # Form to add a new transaction
│   ├── FilterBar.jsx         # Category filter and sort options
│   ├── TransactionList.jsx   # Renders the list (or empty message)
│   └── TransactionItem.jsx   # A single transaction row with delete
├── App.jsx                   # Main component holding the state
├── App.css                   # Styles
└── main.jsx                  # App entry point
```

## Setup Instructions

Make sure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
```bash
   git clone https://github.com/lastamaharjanf25-ux/Personal-expenses-tracker.git
```
2. Go into the project folder:
```bash
   cd React Js
```
3. Install the dependencies:
```bash
   npm install
```
4. Start the development server:
```bash
   npm run dev
```
5. Open the link shown in the terminal (usually `http://localhost:5173`).

To create a production build, run `npm run build`.

## Known Limitations

- Transactions cannot be edited after they are added (only deleted)
- The currency is fixed to `$`
- Data is stored in the browser only, so it is not shared between devices or browsers
- Stretch goals not implemented: spending chart, monthly summary, and budget limit warning

## Author

Lasta Maharjan