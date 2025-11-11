import React from "react";
import useCategoryStore from "../stores/useCategoryStore";
import Card from "../ui/Card";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { formatDate } from "../lib/utils";
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

const CategoryAll = () => {
  const { categories } = useCategoryStore();
  const [data, setData] = useState([]);
  const [isType, setIsType] = useState("all");
  const { activePage, desactivePage } = useOutletContext();
  const links = [
    { id: "all", name: "All" },
    { id: "income", name: "Ingresos" },
    { id: "expense", name: "Gastos" },
  ];

  useEffect(() => {
    if (isType !== "all") {
      setData(categories.filter((cat) => cat.type === isType));
    } else {
      setData(categories);
    }

    desactivePage();
    return;
  }, [isType]);

  return (
    <Card className={`rounded-2xl flex flex-col gap-4`}>
      <Card
        className={"p-4 bg-(--federal-blue) rounded-2xl flex justify-between items-center"}
      >
        <ul className="flex gap-4">
          {links.map((link) => {
            const isSelect = link.id === isType;

            return (
              <li
                key={link.id}
                className={`px-4 py-2 rounded-2xl font-bold cursor-pointer transition-all duration-500 border-2 border-white ${
                  isSelect ? "text-(--federal-blue) bg-(--light-cyan) " : "text-white hover:bg-(--light-cyan) hover:text-(--federal-blue)"
                }`}
                onClick={() => {
                  setIsType(link.id);
                }}
              >
                {link.name}
              </li>
            );
          })}
        </ul>
        <button
          className="flex items-center cursor-pointer w-6 h-6 text-3xl"
          onClick={() => {
            activePage();
          }}
        >
          <HiArrowLeft className="bg-white text-(--federal-blue) p-1 rounded-lg" />
        </button>
      </Card>
      <section className="p-4 bg-(--federal-blue) rounded-2xl overflow-y-auto">
        <h3 className="text-center font-mono font-bold text-2xl mb-4 text-white">
          Categorias
        </h3>
        <div className="flex flex-col gap-4">
          {data.map((cat, i) => {
            return (
              <article
                key={i}
                className={`px-4 py-2 flex items-center space-x-8 cursor-pointer rounded-2xl border-2 border-white ${
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
                  >
                    <FaRegEdit />
                  </Link>
                  <Link
                    className="p-1 bg-white flex justify-center items-center rounded-lg cursor-pointer border-2 transition-all duration-500 hover:text-gray-100 hover:-translate-y-1 hover:border-gray-100 hover:border-2 hover:bg-(--federal-blue)"
                    to={`/categories/${cat.id}`}
                  >
                    <CiSearch />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Card>
  );
};

export default CategoryAll;
