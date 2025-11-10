import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCategoryStore = create(
  persist(
    (set) => ({
      categories: [],
      // Actions
      addCategory: (category) =>
        set((state) => ({
          categories: [
            {
              ...category,
              createAt: new Date().toISOString(),
              id: crypto.randomUUID().slice(0, 5),
            },
            ...state.categories,
          ],
        })),
      updateCategory: (category) => {
        set((state) => ({
          categories: [
            {
              ...category,
              createAt: new Date().toISOString(),
            },
            ...state.categories.filter((cat) => cat.id !== category.id),
          ],
        }));
      },
      deleteCategory: (id) => {
        set((state) => ({
          categories: {
            income: state.categories.income.filter((cat) => cat.id !== id),
          },
        }));
      },
    }),
    { name: "category", version: 1 }
  )
);

export default useCategoryStore;
