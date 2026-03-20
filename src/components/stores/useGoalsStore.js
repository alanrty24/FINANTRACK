import { persist } from "zustand/middleware";
import { create } from "zustand";

const useGoalsStore = create(
  persist(
    (set) => ({
      // Default Status
      goals: [],
      goalsAudit: [],

      // Actions

      // Inserta Meta
      addGoals: (goal) =>
        set((status) => {
          const id = crypto.randomUUID().slice(0, 5);
          const createAt = new Date().toISOString();
          return {
            goals: [
              {
                ...goal,
                id,
                createAt,
              },
              ...status.goals,
            ],
            goalsAudit: [
              {
                ...goal,
                id,
                status: 0,
                createAt,
              },
              ...status.goalsAudit,
            ],
          };
        }),

      // Actualiza Meta
      updadteGoals: (idGoal, values) =>
        set((status) => ({
          goals: status.goals.map((goal) => {
            if (idGoal === goal.id) {
              return {
                ...goal,
                status: values.status,
                amountGoal: goal.amountGoal + values.amountGoal,
                updateAt: new Date().toISOString(),
              };
            }
            return { ...goal };
          }),
          goalsAudit: status.goalsAudit.map((goal) => {
            if (idGoal === goal.id) {
              return {
                ...goal,
                amountGoal: goal.amountGoal + values.amountGoal,
                percentage: values.percentage,
                status: 1,
                updateAt: new Date().toISOString(),
              };
            }
            return { ...goal };
          }),
        })),

      // Elimina Meta
      deleteGoals: (id) =>
        set((status) => {
          const goalToDelete = status.goals.find((g) => g.id === id);
          return {
            goalsAudit: [
              {
                ...goalToDelete,
                status: 2,
                updateAt: new Date().toISOString(),
              },
              ...status.goalsAudit,
            ],
            goals: status.goals.filter((g) => g.id !== id),
          };
        }),
    }),
    { name: "goals", version: 1 }
  )
);

export default useGoalsStore;
