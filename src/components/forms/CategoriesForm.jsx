import React from "react";
import { useForm } from "react-hook-form";
import Card from "../ui/Card";
import Button from "../ui/Button";
import IconsSelect from "../categories/IconsSelect";
import { NEWCATEGORIES } from "../lib/categories";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Input from "../ui/Input";
import "../styles/categoriesform.css"
import useCategoryStore from "../stores/useCategoryStore";
import { HiArrowLeft } from "react-icons/hi";

const CategoriesForm = ({onClose}) => {
  const addCategoryIncome = useCategoryStore((state) => state.addCategoryIncome);
  const addCategoryExpense = useCategoryStore((state) => state.addCategoryExpense); 

  const [data,setData] = useState(
    {
        icon: "",
        name: "",
        description: "",
        status: true,
    }
  )
  const {
    handleSubmit,
    register,
    reset,
    // formState: { errors },
  } = useForm();

  const handleSave = async () => {
    // e.preventdefault();
    if(data.type === "income"){
      await addCategoryIncome(data);
    } else {
      await addCategoryExpense(data); 
    }
    
    reset();
    onClose();
  };

  const handleClickIcon = (newIcon) => {

    console.log(newIcon);
    
    setData({
        ...data,
        icon: newIcon,
    }) 
  }

  return (
    <Card className={'max-w-7xl relative md:px-8 md:py-4'}>
      <div className="shadow-slate-300 shadow-xl w-full h-12 mb-4 flex justify-between px-4 items-center text-3xl gap-4 relative inset-x-0 top-0 border-1 rounded-xl">
          <h3 className="font-mono text-center w-full">New Categorie</h3>
          <button className="flex justify-center items-center"><HiArrowLeft className="bg-(--federal-blue) text-white p-1 rounded-lg" /></button>
      </div>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(handleSave)}>
        <div className="">
          <IconsSelect onChange = {handleClickIcon}/>
        </div>
        <Input 
        {...register("name",{required: "Error, nombre requerido"})}
        type="text" 
        placesholder="Name" 
        required={true} 
        label={"Name"}  
        classNameDiv={"flex flex-col mb-4 gap-2"}
        value = {data.name}
        onChange = {(e) => {setData(
          {
            ...data,
            name: e.target.value 
          }
        )}}
        >    
        </Input>
        <Input 
        {...register("description",{required: "Error, descripción requerida"})}
        type="text" 
        placesholder="Description" 
        required={true} 
        label={"Description"} 
        classNameDiv={"flex flex-col mb-4 gap-2"}
        value = {data.description}
        onChange = {(e) => {setData(
          {
            ...data,
            description: e.target.value 
          }
        )}}
        >    
        </Input>
        <Input 
        type="checkbox" 
        placesholder="Name" 
        required={true} 
        label={"Status"} 
        className={"check"}  
        classNameDiv={"space-x-4 flex items-center"} 
        checked = {data.status}
        onChange = {(e) => {setData({
          ...data,
          status: e.target.checked
        })
        console.log(e.target.checked);
        }}
        >    
        </Input>
        <Button className={'w-full p-4 text-xl font-bold my-4 '} type= "submit">Create</Button>
      </form>
    </Card>
  );
};

export default CategoriesForm;
