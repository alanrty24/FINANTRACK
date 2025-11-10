import React from "react";
import Card from "../ui/Card";
import useCategoryStore from "../stores/useCategoryStore";
import { FaRegEdit } from "react-icons/fa";
import Button from "../ui/Button";
import { formatDate } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const RecentCategoriesIncome = ({onDesable}) => {
  const { categories } = useCategoryStore();
  const categoriesRecent = categories.slice(0, 5);
  const Navigate = useNavigate();

  return (
    <Card className={`flex flex-col gap-4 text-lg`}>
      <h3 className="text-xl text-center font-bold font-mono text-white">
        Categorias Recientes
      </h3>
      {categoriesRecent.length === 0 ? (
        <p className="text-center font-bold text-white">No hay registros</p>
      ) : (
        categoriesRecent.map((cat, i) => {
          return (
            <div
              key={i}
              className={`p-4 shadow-white text-(--federal-blue) border-2 border-white rounded-2xl flex items-center space-x-8 cursor-pointer ${
                cat.type === "income" ? "bg-green-300" : "bg-red-300"
              }`}
            >
              {/* Icono */}
              <div className="flex justify-center items-center w-5 h-5">
                <div className="bg-white p-1 rounded-lg text-2xl ml-2 border-2">
                  {cat.icon}
                </div>
              </div>

              {/* Titulo y fecha */}
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-lg md:text-xl">
                  {cat.name} / {cat.type === "income" ? "Ingresos" : "Gastos"}
                </h3>
                <span className="text-sm">
                  {formatDate(cat.createAt.split("T")[0])}
                </span>
              </div>

              {/* Boton de Modificar */}
              <div className="flex flex-col gap-2">
                <Link
                  className="p-1 bg-white flex justify-center items-center rounded-lg cursor-pointer border-2 transition-all duration-500 hover:text-gray-100 hover:-translate-y-1 hover:border-gray-100 hover:border-2 hover:bg-(--federal-blue)"
                  to={`/categories/${cat.id}/edit`}
                  onClick={onDesable}
                >
                  <FaRegEdit />
                </Link>
                <Link
                  className="p-1 bg-white flex justify-center items-center rounded-lg cursor-pointer border-2 transition-all duration-500 hover:text-gray-100 hover:-translate-y-1 hover:border-gray-100 hover:border-2 hover:bg-(--federal-blue)"
                  to={`/categories/${cat.id}`}
                  onClick={onDesable}
                >
                  <CiSearch />
                </Link>
              </div>
            </div>
          );
        })
      )}
      <div className="w-full flex justify-center">
        <Link 
        className={"rounded-2xl bg-(--light-cyan) text-(--federal-blue) font-bold border-2 border-white cursor-pointer transition-all duration-500 hover:text-(--light-cyan) hover:-translate-y-1 hover:bg-(--blue-green) hover:border-2 hover:cursor-pointe px-4 py-2 text-base md:text-lg"}
        // onClick={onDesable}
        to={'/categories/all'}
        >Ver Todas</Link>
      </div>
    </Card>
  );
};

export default RecentCategoriesIncome;
