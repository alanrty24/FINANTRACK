import { create } from "zustand";
import { persist } from "zustand/middleware";

const useExpenseStore =
  create(
    persist(
      (set) => ({
        // Inicializamos el estado
        transactions: [],
        filters: {
          dateRange: "All",
          type: "All",
          category: "All",
        },
        // Acciones
        addTransaction: (transaction) =>
          set((state) => ({
            transactions: [
              {
                ...transaction,
                id: crypto.randomUUID(),
                createAt: new Date().toISOString(),
              },
              ...state.transactions,
            ],
          })),
        deleteTransaction: (id) =>
          set((state) => ({
            transactions: state.transactions.filter((t) => t.id !== id),
          })),
        addFilter: (newFilter) =>
          set((state) => ({
            filters: { ...state.filters, ...newFilter },
          })),
      }),
      { name: "transactions", version: 2 }
    )
  );

export default  useExpenseStore; 

export function useTotalbalance() {
  const { transactions } = useExpenseStore(); 
  console.log(transactions);
  
  const total =  transactions.reduce((acum, transaction) => {
    acum[transaction.type] = (acum[transaction.type] + transaction.amount) || 0; 
    return acum; 
  }, {income: 0 , expense: 0});

  return total.income - total.expense
}

export function useBalance() {
  const { transactions } = useExpenseStore(); 

  return transactions.reduce((transaction, acum) => {
    acum[transaction.type] = (acum[transaction.type] + transaction.amount) || 0; 
    return acum; 
  }, {income: 0 , expense: 0})
}