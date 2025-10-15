import { create } from "zustand";
import { persist } from "zustand/middleware";

export default function useExpenseStore() {
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
      { name: "transactions", version: 1 }
    )
  );
}
