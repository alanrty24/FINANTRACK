import React from "react";
import Card from "../ui/Card";
import useExpenseStore from "../stores/useExpenseStore";
import { CATEGORIES } from "../lib/categories";
// import useCategoryStore from "../stores/useCategoryStore";

const RecentTransaction = () => {
  const { transactions } = useExpenseStore();
  const getTransactions = transactions.slice(0, 5);
  // const { categories } = useCategoryStore();

  // const allCategorias = {
  //   income: [
  //     ...CATEGORIES.income,
  //     ...categories.filter((cat) => cat.type === "income"),
  //   ],
  //   expense: [
  //     ...CATEGORIES.expense,
  //     ...categories.filter((cat) => cat.type === "expense"),
  //   ],
  // };


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
                  <div>

                  </div>
                  {/* Descripción y fecha */}
                  <div>
                    <h3>{transaction.description}</h3>
                    <time>{transaction.date}</time>
                  </div>
                  {/* Monto */}
                  <div>
                    <span>{transaction.amount}</span>
                  </div>
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
