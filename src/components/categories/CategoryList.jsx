import Card from "../ui/Card";
import useCategoryStore from "../stores/useCategoryStore";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import IconsSelect from "./IconsSelect";
import Input from "../ui/Input";
import "../styles/categoriesform.css";

const CategoryList = () => {
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { categories } = useCategoryStore();
  const Navigate = useNavigate();
  const { activePage, desactivePage } = useOutletContext();

  useEffect(() => {
    if (id) {
      const getCategory = categories.find((cat) => cat.id === id);
      setCategory(getCategory);
      setLoading(false);
      desactivePage();
      return;
    }

    if (loading) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
  }, [id]);

  return (
    <Card className={"flex flex-col gap-4"}>
      <div className="shadow-slate-300 bg-(--federal-blue) shadow-xl w-full h-10 mb-4 flex justify-between px-4 items-center text-3xl gap-4 relative inset-x-0 top-0 border-1 rounded-xl">
        <h3 className="font-mono text-center w-full text-white">Categoria</h3>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            activePage();
          }}
        >
          <HiArrowLeft className="bg-white text-(--federal-blue) p-1 rounded-lg" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-4 shadow-lg shadow-slate-500 border-0 space-x-4 mb-2 w-full font-bold rounded-2xl text-2xl">
        <h3 className="font-mono">Icono</h3>
        <div className="inline-flex space-x-4 p-4">
          <div
            className={`flex justify-center items-center`}
          >
            <div className="p-2 rounded-xl bg-(--vivid-sky-blue) border-2 border-(--federal-blue)">
              {category.icon}
            </div>
          </div>
        </div>
      </div>
      <Input
        type="text"
        label={"Nombre"}
        disabled
        classNameDiv={"flex flex-col gap-2"}
        value={category.name}
      ></Input>
      <Input
        type="text"
        label={"Tipo"}
        disabled
        classNameDiv={"flex flex-col gap-2"}
        value={(category.type === "income" ? "Ingresos" : "Gastos")}
      ></Input>
      <Input
        type="checkbox"
        label={"Estado"}
        disabled
        classNameDiv={"flex gap-2"}
        className={"check"}
        checked={category.status}
      ></Input>
    </Card>
  );
};

export default CategoryList;
