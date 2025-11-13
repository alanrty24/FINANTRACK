import React from "react";
import { useForm } from "react-hook-form";
import Card from "../ui/Card";
import { IoClose } from "react-icons/io5";
import useExpenseStore from "../stores/useExpenseStore";
import useCategoryStore from "../stores/useCategoryStore";
import Input from "../ui/Input";
import { useState } from "react";
import "../styles/transactionsform.css";
import { CATEGORIES } from "../lib/categories";
import Button from "../ui/Button";
import { FaSave } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

const TransactionsForm = ({ onClose }) => {
  const { categories } = useCategoryStore();
  const [data, setData] = useState({
    type: "income",
    category: "",
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
  });
  const addTransaction = useExpenseStore((state) => state.addTransaction);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      type: "income",
    },
  });

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
  const handleSaveTransaction = (data) => {
    addTransaction({
      ...data,
      amount: parseFloat(data.amount),
    });

    reset();
    onClose();
  };

  const type = watch("type");

  return (
    <Card className={`flex flex-col gap-4`}>
        {/* Header para salir */}
      <div className="shadow-slate-300 bg-(--federal-blue) shadow-xl w-full h-10 mb-4 flex justify-between px-4 py-2 items-center text-3xl gap-4 relative inset-x-0 top-0 border-1 rounded-xl">
        <h3 className="font-mono w-full text-white text-xl">
          Nueva Transacción
        </h3>
        <button
          className="flex justify-center items-center cursor-pointer"
          onClick={() => {
            onClose()
          }}
        >
          <IoClose className="text-white" />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(handleSaveTransaction)}
        className="flex flex-col gap-2"
      >
        {/* Entrada del Monto */}
        <div className="px-4 py-6 w-full bg-(--federal-blue) rounded-2xl flex justify-center items-center">
          <h3 className="text-white w-auto text-2xl">Bs</h3>
          <input
            {...register("amount", { required: "Error, Monto invalido" })}
            type="number"
            value={data.amount}
            onChange={(e) => {setData({...data, amount: e.target.value})}}
            placeholder="0.00"
            className="text-white p-4 text-2xl w-1/2 text-center placeholder:text-white outline-0"
          />
        </div>

        {/* Entrada del tipo */}
        <div className="flex flex-col items-center justify-center gap-2 type">
          <h3 className="text-start w-full">Tipo</h3>
          <select
            {...register("type", { required: "Error, seleccione un tipo" })}
            defaultValue={type}
            className="p-4 bg-white text-(--federal-blue) border-2 border-blue-950 md:w-1/2"
            onChange={(e) => {
              setData({ ...data, type: e.target.value });
            }}
          >
            <option value="income" className="text-black">
              📈 Ingresos
            </option>
            <option value="expense" className="text-black">
              📉 Gastos
            </option>
          </select>
        </div>

        {/* Entrada de Categoria */}
        <div className="flex flex-col gap-2 category">
          <h3 className="text-start w-full">Categoria</h3>
          <select
            {...register("category", { required: "Error, seleccione un tipo" })}
            value={data.category}
            className="p-4 bg-white text-(--federal-blue) border-2 border-blue-950 md:w-1/2"
            onChange={(e) => {
              setData({ ...data, category: e.target.value });
            }}
          >
            {allCategorias[data.type].map((cat, i) => {
               return(<option key={i} value={cat.id}>{cat.icon} {cat.name}</option>)
            })}
          </select>
        </div>

        {/* Entrada de Descripción */}
        <Input
        {...register("description",{required: "Error, Descripción Requerida"})}
        label={"Descripción"}
        classNameDiv={"flex flex-col gap-2"}
        className={"bg-white text-(--federal-blue) border-2 border-blue-950 placeholder:text-(--federal-blue)"}
        >
        </Input>

        {/* Entrada de Fecha */}
        <Input
        {...register("date",{required: "Error, Fecha Requerida"})}
        label={"Fecha"}
        type="date"
        value = {data.date}
        classNameDiv={"flex flex-col gap-2"}
        className={"bg-white text-(--federal-blue) border-2 border-blue-950 placeholder:text-(--federal-blue)"}
        >
        </Input>

        {/* Button de guardar */}
        <div className="flex justify-between">
        <Button
        className = {'flex gap-2 justify-center items-center my-4 w-1/2'}
        size = {"md"}
        type = "submit"
        >
          <FaSave /> Guardar
        </Button>
        <Button 
        className = {'flex gap-2 justify-center items-center my-4 '}
        variant = {"edit"}
        onClick = {() => {onClose()}}
        >
            <HiArrowLeft/> Cancelar
        </Button>
        </div>
      </form>
    </Card>
  );
};

export default TransactionsForm;
