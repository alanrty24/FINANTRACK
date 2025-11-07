import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCategoryStore =  create(
    persist(
      (set) => ({
        categories: { income: [], expense: [] },
        // Actions
        addCategoryIncome: (category) => 
          set((state) => ({
            categories: {
              income: [
                 {
                  ...category,
                  type: "income",
                  createAt: new Date().toISOString(),
                  id: crypto.randomUUID().slice(0,5)
                },
                ...state.categories.income,
              ],
              expense: state.categories.expense,
            },
          }))
        ,
        addCategoryExpense: (category) =>             
          set((state) => ({
            categories: {
              income: state.categories.income,
              expense: [
                {
                  ...category,
                  type: "expense",
                  createAt: new Date().toISOString(),
                  id: crypto.randomUUID().slice(0,5)
                },
                ...state.categories.expense,
              ],
            },
          }))
        ,
        updateCategoryIncome: (category, id) => {
          set((state) => ({
            category: {
              income: state.category.income.map((cat) => {
                if (cat.id === id) {
                  return {
                    ...category,
                    ...cat.id,
                    createAt: new Date().toISOString(),
                  };
                } else {
                  return {
                    ...cat,
                  };
                }
              }),
            },
          }));
        },
        updateCategoryExpense: (category, id) => {
          set((state) => ({
            category: {
              expense: state.category.expense.map((cat) => {
                if (cat.id === id) {
                  return {
                    ...category,
                    ...cat.id,
                    createAt: new Date().toISOString(),
                  };
                } else {
                  return {
                    ...cat,
                  };
                }
              }),
            },
          }));
        },
        deleteCategoryIncome: (id) => {
          set((state) => ({
            categories: {
              income: state.categories.income.filter((cat) => cat.id !== id),
            },
          }));
        },
        deleteCategoryExpense: (id) => {
          set((state) => ({
            categories: {
              expense: state.categories.expense.filter((cat) => cat.id !== id),
            },
          }));
        },
      }),
      { name: "category", version: 2 }
    )
  );

export default useCategoryStore;