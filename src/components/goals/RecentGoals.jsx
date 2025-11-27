import { BiCheck } from "react-icons/bi";
import Card from "../ui/Card";
import useGoalsStore from "../stores/useGoalsStore";
import Circle from "../ui/Circle";
import Button from "../ui/Button";
import { formatDate } from "../lib/utils";
import { useAlert } from "../../hook/useAlert";
import useExpenseStore from "../stores/useExpenseStore";

const RecentGoals = () => {
  const { goals, updadteGoals } = useGoalsStore();
  const addTransaction = useExpenseStore((state) => state.addTransaction);
  const recentGoals = goals.slice(0, 5);
  const { showAlert, showConfirm } = useAlert();

  async function handleClickFinish(amount, percentage, id, status) {
    if (status === false) {
      showAlert({
        title: "Meta Completa",
        text: "Ya la meta ha sido completada, cree una nueva meta",
        icon: "error",
      });

      return;
    }

    try {
      const auth = await showConfirm({
        title: "Uso de Meta",
        text: "¿Está seguro de usar esta meta?, Esta acción es irreversible.",
      });

      if (auth.isConfirmed) {
        await addTransaction({
          type: "expense",
          category: "other-expense",
          description: "Uso de ahorros",
          amount: parseFloat(amount),
          idGoal: "",
          date: new Date().toISOString().split("T")[0],
        });

        await updadteGoals(id, {
          amountGoal: 0,
          status: false,
        });

        showAlert({
          title: "Nueva Transacción",
          text: `Felicidades, su meta fue usada con exito`,
        });
      }
    } catch (error) {
      showAlert({
        title: "Error",
        text: `No se pudo procesar el gasto, ${error}`,
        icon: "error",
      });
    }
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
            console.log(goal.date);

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
                <section className="flex justify-between gap-4 mt-4">
                  <div className="flex flex-wrap gap-2">
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
                  </div>
                  <div>
                    <Button
                      className="p-2 flex items-center justify-center rounded-2xl border-2 bg-green-200"
                      variant="new"
                      disabled={percentage !== 100 ? true : false}
                      onClick={() => {
                        handleClickFinish(
                          goal.amount,
                          percentage,
                          goal.id,
                          goal.status
                        );
                      }}
                    >
                      <BiCheck className="text-xl" />
                    </Button>
                  </div>
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
