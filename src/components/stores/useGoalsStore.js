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
        set((status) => ({
          goals: [
            {
              ...goal,
              id: crypto.randomUUID().slice(0, 5),
              createAt: new Date().toISOString(),
            },
            ...status.goals,
          ],
          goalsAudit: [
            {
              ...goal,
              id: crypto.randomUUID().slice(0, 5),
              status: 0,
              createAt: new Date().toISOString(),
            },
            ...status.goalsAudit,
          ],
        })),

      // Actualiza Meta
      updadteGoals: (idGoal, values) =>
        set((status) => ({
          goals: status.goals.map((goal) => {
            let value = {};
            if (idGoal === goal.id) {
              value = {
                ...goal,
                status: values.status,
                amountGoal: goal.amountGoal + values.amountGoal,
                updateAt: new Date().toISOString(),
              };
            } else {
              value = { ...goal };
            }

            return value;
          }),
          goalsAudit: status.goals.map((goal) => {
            let value = {};
            if (idGoal === goal.id) {
              value = {
                ...goal,
                amountGoal: goal.amountGoal + values.amountGoal,
                percentage: values.percentage,
                status: 1,
                updateAt: new Date().toISOString(),
              };
            } else {
              value = { ...goal };
            }

            return value;
          }),
        })),

      // Elimina Meta
      deleteGoals: (id) =>
        set((status) => ({
          goalsAudit: [
            {
              ...status.goals.filter((g) => g.id === id),
              status: 2,
              updateAt: new Date().toISOString(),
            },
            ...status.goalsAudit,
          ],
          goals: status.goals.filter((g) => g.id !== id),
        })),
    }),
    { name: "goals", version: 1 }
  )
);

export default useGoalsStore;
