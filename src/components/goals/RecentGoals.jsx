import { FcCheckmark } from "react-icons/fc"; 
import React from "react";
import Card from "../ui/Card";
import useGoalsStore from "../stores/useGoalsStore";
import Circle from "../ui/Circle";
import Button from "../ui/Button"
import { formatDate } from "../lib/utils";
// import { useAlert } from "../../hook/useAlert";

const RecentGoals = () => {
  const { goals } = useGoalsStore();
  const recentGoals = goals.slice(0, 5);
  // const { showAlert } = useAlert();

  function handleOnClick() {
   
  }

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
            const amountGoal = goal.amountGoal;
            const percentage = (amountGoal / goal.amount) * 100;

            // seeAlert(
            //   `Meta Superada`,
            //   `Se ha logrado la meta: ${goal.name}`,
            //   "success",
            //   percentage
            // );

            return (
              <Card
                key={i}
                className={`p-4 bg-slate-200 rounded-2xl flex flex-col gap-2`}
                onClick={handleOnClick}
              >
                {/* Nombre de la meta */}
                <section className="flex items-center space-x-2">
                  <h3 className="font-bold font-mono text-xl">{goal.name}</h3>
                  {/* Monto de la meta */}
                  <span className="text-center font-semibold text-green-700">
                    ({goal.amount} Bs)
                  </span>
                </section>

                {/* Barra de progreso */}
                <section className="flex items-center gap-2">
                  {/* barra de progreso */}
                  <article className="flex-1 border-2 border-blue-900 rounded-xl">
                    <div
                      className={`rounded-full ${
                        percentage > 40 ? "bg-green-400" : "bg-(--blue-green)"
                      } ${percentage === 0 ? "py-2 px-0" : "p-2"} `}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </article>

                  {/* Porcentaje de progreso */}
                  <h3 className="font-bold text-center">{percentage}%</h3>
                </section>

                {/* fecha y si esta activa o no */}
                <section className="flex flex-wrap gap-2 mt-4">
                  <Circle variant="blue">{formatDate(goal.date)}</Circle>
                  <Circle variant={`${goal.status ? "green" : "red"}`}>
                    {goal.status ? "Activa" : "Desactivada"}
                  </Circle>
                  <Circle
                    variant={`${
                      goal.amount === goal.amountGoal ? "green" : "grey"
                    }`}
                  >
                    {goal.status ? "En Proceso" : "Completada"}
                  </Circle>
                  <Button className="p-2 flex items-center justify-center rounded-2xl border-2 bg-green-200">
                    <FcCheckmark />
                  </Button>
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
