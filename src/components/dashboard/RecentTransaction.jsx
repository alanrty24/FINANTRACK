import React from "react";
import Card from "../ui/Card";
import useExpenseStore from "../stores/useExpenseStore";
import { CATEGORIES } from "../lib/categories";
import useCategoryStore from "../stores/useCategoryStore";
import { formatDate } from "../lib/utils";

const RecentTransaction = () => {
  const { transactions } = useExpenseStore();
  const getTransactions = transactions.slice(0, 5);
  const { categories } = useCategoryStore();
  const allCategorias = {
    income: [
      ...CATEGORIES.income,
      ...categories.filter((cat) => cat.type === "income"),
    ],
    expense: [
      ...CATEGORIES.expense,
      ...categories.filter((cat) => cat.type === "expense"),
    ],
  };

  const getIcono = (categoryId, type) => {
    const iconItems = allCategorias[type]?.find(
      (cat) => cat.id === categoryId
    ) || { icon: "💰", categoryId: categoryId };
    return iconItems;
  };

  return (
    <Card className={`bg-(--federal-blue) p-4 rounded-2xl`}>
      <h3 className="text-white font-bold font-mono text-center text-xl mb-4">
        Transacciones Recientes
      </h3>
      <section>
        {getTransactions.length > 0 ? (
          <article className="flex flex-col gap-4">
            {getTransactions.map((transaction, i) => {
              const icono = getIcono(transaction.category, transaction.type);

              return (
                <div
                  key={i}
                  className="p-4 flex items-center justify-around border-2 border-white gap-4 rounded-2xl  bg-slate-200 lg:gap-6"
                >
                  {/* Icono */}
                  <div className="flex justify-center items-center w-5 h-5">
                    <div className="bg-(--blue-green) border-2 p-2 rounded-lg">{icono.icon}</div>
                  </div>
                  {/* Descripción y fecha */}
                  <div className="flex-1 px-2">
                    <h3 className="font-bold text-lg">{transaction.description}</h3>
                    <time className="font-light text-sm">{formatDate(transaction.date)}</time>
                  </div>
                  {/* Monto */}
                  <div>
                    <span className={`font-bold md:text-lg ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>{transaction.type === "income" ? "+" : "-"}  {transaction.amount} Bs</span>
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
