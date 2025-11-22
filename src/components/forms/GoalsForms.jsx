import React from "react";
import { IoClose } from "react-icons/io5";
import Card from "../ui/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useGoalsStore from "../stores/useGoalsStore";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaSave } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

const GoalsForms = ({ onClose }) => {
  const [data, setData] = useState({
    name: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    status: true,
  });
  const addGoals = useGoalsStore((state) => state.addGoals);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  });

  const handleSave = () => {
    addGoals({
      ...data,
      amountGoal: 0,
      percentage: 0,
      amount: parseFloat(data.amount),
    });
    reset();
    onClose();
  };

  return (
    <Card className={`flex flex-col gap-4 md:px-8`}>
      {/* Header para salir */}
      <div className="shadow-slate-300 bg-(--federal-blue) shadow-xl w-full h-10 mb-4 flex justify-between px-4 py-2 items-center text-3xl gap-4 relative inset-x-0 top-0 border-1 rounded-xl">
        <h3 className="font-mono w-full text-white text-xl">Nueva Meta</h3>
        <button
          className="flex justify-center items-center cursor-pointer"
          onClick={() => {
            onClose();
          }}
        >
          <IoClose className="text-white" />
        </button>
      </div>
      <form onSubmit={handleSubmit(handleSave)} className="flex flex-col gap-2">
        {/* Entrada del Monto */}
        <div className="px-4 py-6 w-full bg-(--federal-blue) rounded-2xl flex justify-center items-center">
          <h3 className="text-white w-auto text-2xl">Bs</h3>
          <input
            {...register("amount", { required: "Error, Monto invalido" })}
            type="number"
            value={data.amount}
            onChange={(e) => {
              setData({ ...data, amount: e.target.value });
            }}
            placeholder="0.00"
            className="text-white p-4 text-2xl text-center placeholder:text-white outline-0"
          />
        </div>
        {errors.amount && (
          <p className="text-red-500 text-center font-bold">
            {errors.amount.message}
          </p>
        )}

        {/* Nombre de la meta */}
        <Input
          {...register("name", { required: "Error, Requiere Nombre" })}
          label={"Nombre de Meta "}
          classNameDiv={`flex flex-col gap-2 `}
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {errors.name && (
          <p className="text-red-500 text-center font-bold">
            {errors.name.message}
          </p>
        )}
        
        {/* Monto Ahorrado de la meta */}
        <Input
          {...register("name", { required: "Error, Requiere Nombre" })}
          label={"Nombre de Meta "}
          classNameDiv={`flex flex-col gap-2 `}
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {errors.name && (
          <p className="text-red-500 text-center font-bold">
            {errors.name.message}
          </p>
        )}

        {/* fecha de la meta */}
        <Input
          {...register("date", { required: "Error, Requiere Nombre" })}
          label={"Fecha"}
          classNameDiv={`flex flex-col gap-2 `}
          type="date"
          name="date"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />
        {errors.date && (
          <p className="text-red-500 text-center font-bold">
            {errors.date.message}
          </p>
        )}

        {/* Estado de la meta */}
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
        />
        {/* Botones de guardado o cancelar */}
        <div className="flex justify-between relative mt-4">
          <Button
            className={
              "flex gap-2 justify-center items-center my-4 w-1/2 md:w-1/4"
            }
            size={"md"}
            type="submit"
          >
            <FaSave /> Guardar
          </Button>
          <Button
            className={"flex gap-2 justify-center items-center my-4 "}
            variant={"edit"}
            onClick={() => {
              onClose();
            }}
          >
            <HiArrowLeft /> Cancelar
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default GoalsForms;
