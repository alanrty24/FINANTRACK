import React from "react";
import { useForm } from "react-hook-form";
import Card from "../ui/Card";
import Button from "../ui/Button";
import IconsSelect from "./IconsSelect";
import { NEWCATEGORIES } from "../lib/categories";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Input from "../ui/Input";
import "../styles/categoriesform.css"

const CategoriesForm = () => {
  const [data,setData] = useState(
    {
        icon: "",
        name: "",
        description: "",
        status: 0,
    }
  )
  const {
    handleSubmit,
    register,
    // reset,
    // formState: { errors },
  } = useForm();

  const handleSave = (e) => {
    e.preventdefault();
  };

  const handleClickIcon = (newIcon) => {

    setData({
        ...data,
        icon: newIcon
    })
    
    console.log(data);
    
  }

  return (
    <Card className={'mx-auto max-w-7xl relative md:px-8 md:py-4'}>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(handleSave)}>
        <div className="">
          <IconsSelect onChange = {handleClickIcon}/>
        </div>
        <Input 
        {...register("name",{required: "Error, nombre requerido"})}
        type="text" placesholder="Name" required={true} label={"Name"}  classNameDiv={"flex flex-col mb-4 gap-2"}>
            
        </Input>
        <Input 
        {...register("description",{required: "Error, descripción requerida"})}
        type="text" placesholder="Description" required={true} label={"Description"} classNameDiv={"flex flex-col mb-4 gap-2"}>
            
        </Input>
        <Input 
        type="checkbox" 
        placesholder="Name" 
        required={true} 
        label={"Status"} 
        className={"check"} 
        checked 
        classNameDiv={"space-x-4 flex items-center"} 
        value = {data.status}
        onChange = {(e) => {setData({
          ...data,
          status: e.target.value
        })}}
        >    
        </Input>
        <Button className={'w-full p-4 text-xl font-bold my-4 '}>Create</Button>
      </form>
    </Card>
  );
};

export default CategoriesForm;
