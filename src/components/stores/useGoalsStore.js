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
      updadteGoals: (goal) =>
        set((status) => ({
          goalsAudit: [
            {
              ...status.goals.filter((g) => g.id === goal.id),
              status: 1,
              updateAt: new Date().toISOString(),
            },
            ...status.goalsAudit,
          ],
          goals: [
            ...status.goals.filter((g) => g.id !== goal.id),
            {
              ...goal,
              createAt: new Date().toISOString(),
            },
          ],
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
          goals: [...status.goals.filter((g) => g.id !== id)],
        })),
    }),
    { name: "Goals", version: 1 }
  )
);

export default useGoalsStore;
