import React from "react";
import { useForm } from "react-hook-form";
import Card from "../ui/Card";
import Button from "../ui/Button";
import IconsSelect from "../categories/IconsSelect";
import { useState, useEffect } from "react";
import Input from "../ui/Input";
import "../styles/categoriesform.css";
import useCategoryStore from "../stores/useCategoryStore";
import { HiArrowLeft } from "react-icons/hi";
import { useOutletContext, useParams } from "react-router-dom";

const CategoryEdit = () => {
  const { id } = useParams();
  const { categories } = useCategoryStore();
  const updateCategory = useCategoryStore((state) => state.updateCategory);
  const [data, setData] = useState({
    icon: "",
    name: "",
    type: "income",
    status: true,
  });
  const { activePage, desactivePage } = useOutletContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const getDataCategory = categories.find((cat) => cat.id === id);
      setData(getDataCategory);
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

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleSave = async () => {
    // e.preventdefault();
    if (data.icon === "") {
      alert("Seleccione un Icon");
      return;
    }

    await updateCategory(data);
    reset();
    activePage();
  };

  const handleClickIcon = (icon, name) => {
    setData({
      ...data,
      icon: icon,
      name: name,
    });
  };

  return (
    <Card className={"max-w-7xl relative md:px-8 md:py-4"}>
      <div className="shadow-slate-300 bg-(--federal-blue) shadow-xl w-full h-10 mb-4 flex justify-between px-4 items-center text-3xl gap-4 relative inset-x-0 top-0 border-1 rounded-xl">
        <h3 className="font-mono text-center w-full text-white">
          Actualizar Categoria
        </h3>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            activePage();
          }}
        >
          <HiArrowLeft className="bg-white text-(--federal-blue) p-1 rounded-lg" />
        </button>
      </div>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleSave)}
      >
        <IconsSelect
          onChange={handleClickIcon}
          iconValue={{
            id: data.id,
            name: data.name,
            icon: data.icon,
          }}
        />
        <Input
          {...register("name", { required: "Error, nombre requerido" })}
          type="text"
          placesholder="Name"
          label={"Name"}
          id={"name"}
          classNameDiv={"flex flex-col gap-2"}
          value={data.name}
          onChange={(e) => {
            setData({
              ...data,
              name: e.target.value,
            });
          }}
        ></Input>
        {errors.name && (
          <p className="text-red-600 text-center font-bold">
            {errors.name.message}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="">Tipo</label>
          <select
            value={data.type}
            className="p-4 border-2 rounded-3xl"
            onChange={(e) => {
              setData({
                ...data,
                type: e.target.value,
              });
            }}
          >
            <option value="income">Ingresos</option>
            <option value="expense">Gastos</option>
          </select>
        </div>
        <Input
          type="checkbox"
          label={"Estado"}
          className={"check"}
          classNameDiv={"space-x-4 flex items-center mt-2"}
          checked={data.status}
          onChange={(e) => {
            setData({
              ...data,
              status: e.target.checked,
            });
            console.log(e.target.checked);
          }}
        ></Input>
        <Button className={"w-full p-4 text-xl font-bold my-4 cursor-pointer "} type="submit">
          Actualizar
        </Button>
      </form>
    </Card>
  );
};

export default CategoryEdit;
