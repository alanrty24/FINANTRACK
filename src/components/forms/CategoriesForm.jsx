import React from "react";
import { useForm } from "react-hook-form";
import Card from "../ui/Card";
import Button from "../ui/Button";
import IconsSelect from "../categories/IconsSelect";
import { useState } from "react";
import Input from "../ui/Input";
import "../styles/categoriesform.css";
import useCategoryStore from "../stores/useCategoryStore";
import { HiArrowLeft } from "react-icons/hi";
import { useEffect } from "react";

const CategoriesForm = ({ onClose }) => {
  const addCategory = useCategoryStore((state) => state.addCategory);
  const [nameIcon, setNameIcon] = useState("");
  const [data, setData] = useState({
    icon: "",
    name: "",
    type: "income",
    status: true,
  });

  useEffect(() => {
    if (data.name && data.name !== nameIcon) {
      setData({
        ...data,
        name: nameIcon,
      });
    }
  }, [data.name]);

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleSave = async () => {
    // e.preventdefault();
    if (data.icon === "") {
      alert("Seleccione un Icon");
      return;
    }

    await addCategory(data);
    reset();
    onClose();
  };

  const handleClickIcon = (newIcon) => {
    setData({
      ...data,
      icon: newIcon.icon,
      name: newIcon.name,
      id: newIcon.id
    });

    setNameIcon(newIcon.name);
  };

  return (
    <Card className={"max-w-7xl relative md:px-8 md:py-4 "}>
      <div className="shadow-slate-300 bg-(--federal-blue) shadow-xl w-full h-10 mb-4 flex justify-between px-4 items-center text-3xl gap-4 relative inset-x-0 top-0 border-1 rounded-xl">
        <h3 className="font-mono w-full text-white text-xl">
          Nueva Categoria
        </h3>
        <button
          className="flex justify-center items-center cursor-pointer"
          onClick={() => {
            onClose();
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
            id: "",
            name: "",
            icon: "",
          }}
          onName={(nameInput) => {
            setValue("name", nameInput);
          }}
        />
        <Input
          {...register("name", { required: "Error, nombre requerido" })}
          type="text"
          placesholder="Nombre"
          label={"Nombre"}
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
            defaultValue={data.type}
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
          }}
        ></Input>
        <div className="flex justify-center">
          <Button
            className={"w-full px-4 py-2 text-xl font-bold my-4 lg:w-1/4 "}
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CategoriesForm;
