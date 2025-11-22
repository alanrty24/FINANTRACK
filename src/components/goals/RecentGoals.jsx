import React from "react";
import Card from "../ui/Card";
import useGoalsStore from "../stores/useGoalsStore";
import Circle from "../ui/Circle";
import { formatDate } from "../lib/utils";

const RecentGoals = () => {
  const { goals } = useGoalsStore();
  const recentGoals = goals.slice(0, 5);

  return (
    <Card className={`bg-(--federal-blue) p-4 rounded-2xl`}>
      <h3 className="text-white font-bold font-mono text-center text-xl mb-4">
        Metas Recientes
      </h3>
      <section className="flex flex-col gap-4">
        {recentGoals.length === 0 ? (
          <p className="text-white font-bold p-4 text-center text-base">
            No hay Registros...
          </p>
        ) : (
          recentGoals.map((goal, i) => {
            const index = parseInt(Math.random() * 5);
            setTimeout(() => {} , 100) 
            console.log(index);
            
            return (
              <Card
                key={i}
                className={`p-4 bg-slate-200 rounded-2xl flex flex-col gap-2`}
              >
                {/* Nombre de la meta */}
                <section className="flex items-center space-x-2">
                  <h3 className="font-bold text-xl">{goal.name}</h3>
                   {/* Monto de la meta */}
                  <span className="text-center font-semibold text-green-700">
                    ({goal.amount} Bs)
                  </span>
                </section>

                {/* Barra de progreso */}
                <section className="flex items-center gap-2">
                  {/* barra de progreso */}
                  <article className="flex-1 border-2 rounded-xl">
                    <div
                      className="p-2 rounded-full bg-(--blue-green)"
                      style={{ width: `${30}%` }}
                    ></div>
                  </article>

                  {/* Porcentaje de progreso */}
                  <h3 className="font-bold text-center">30%</h3>

                </section>

                {/* fecha y si esta activa o no */}
                <section className="flex gap-2 mt-4">
                  <Circle variant="blue">{formatDate(goal.date)}</Circle>
                  <Circle variant={`${goal.status ? "green" : "red"}`}>
                    {goal.status ? "Activa" : "Desactiva"}
                  </Circle>
                </section>
              </Card>
            );
          })
        )}
      </section>
    </Card>
  );
};

export default RecentGoals;
