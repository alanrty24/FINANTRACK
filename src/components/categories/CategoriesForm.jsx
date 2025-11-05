import React from "react";
import { useForm } from "react-hook-form";
import Card from "../ui/Card";
import Button from "../ui/Button";
import IconsSelect from "./IconsSelect";
import { NEWCATEGORIES } from "../lib/categories";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Input from "../ui/Input";


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
    // register,
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
    <Card className={'mx-auto max-w-7xl relative'}>
      <form action="" onSubmit={handleSubmit(handleSave)}>
        <div className="">
          <IconsSelect onChange = {handleClickIcon}/>
        </div>
        <Input type="text" placesholder="Name" required={true}>
            Name
        </Input>
        <Input type="text" placesholder="Description" required={true}>
            Description
        </Input>
        <Input type="checkbox" placesholder="Name" required={true}>
            Status
        </Input>
        <Button className={'w-full p-4 text-xl font-bold mt-8 '}>Create</Button>
      </form>
    </Card>
  );
};

export default CategoriesForm;
