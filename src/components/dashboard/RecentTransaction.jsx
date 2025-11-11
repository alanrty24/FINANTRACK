import React from "react";
import Card from "../ui/Card";
import useExpenseStore from "../stores/useExpenseStore";

const RecentTransaction = () => {
  const { transactions } = useExpenseStore();
  const getTransactions = transactions.slice(0, 5);

  return (
    <Card className={`bg-(--federal-blue) p-4 rounded-2xl`}>
      <h3 className="text-white font-bold font-mono text-center text-xl">
        Transacciones Recientes
      </h3>
      <section>
        {getTransactions.length > 0 ? (
          <article>
            {getTransactions.map((transaction, i) => {
              return (
              <div key={i}>
                {/* Icono */}

                {/* Descripción y fecha */}

                {/* Monto */}
              </div>
            );
            })}
          </article>
        ) : (
          <p className="text-white font-bold p-4 text-center text-base">
            No hay registros ...
          </p>
        )}
      </section>
    </Card>
  );
};

export default RecentTransaction;
