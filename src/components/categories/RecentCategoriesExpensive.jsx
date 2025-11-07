import React from "react";
import Card from "../ui/Card";
import useCategoryStore from "../stores/useCategoryStore";
import { FaRegEdit } from "react-icons/fa";
import Button from "../ui/Button";


const RecentCategoriesExpensive = () => {
  const categories = useCategoryStore((state) => state.categories);

  return (
    <Card className={`flex flex-col gap-4 text-lg`}>
        <h3 className="text-xl font-bold font-sans">Categorias Recientes de Gastos</h3>
      {categories ? (
        categories.expense.map((cat, i) => {
          return (
            <div key={i} className="p-4 shadow-xl border-1 rounded-2xl flex items-center space-x-8">
              {/* Icono */}
              <div className="flex justify-center items-center w-5 h-5">
                <div className="bg-(--blue-green) p-1 rounded-lg">
                    {cat.icon}
                </div>
              </div>

              {/* Titulo y fecha */}
              <div className="flex flex-col flex-1">
                <h3 className="font-bold">{cat.name}</h3>
                <span>{cat.createAt.split("T")[0]}</span>
              </div>

              {/* Boton de Modificar */}
              <Button variant={"edit"}>
                <FaRegEdit /> 
              </Button>
            </div>
          );
        })
      ) : (
        <p>No hay registros</p>
      )}
    </Card>
  );
};

export default RecentCategoriesExpensive;
