import React from "react";
import CategoriesForm from "../forms/CategoriesForm";
import Button from "../ui/Button";
import { useState } from "react";
import Card from "../ui/Card";
import { BiEdit } from "react-icons/bi";
import RecentCategoriesExpensive from "../categories/RecentCategoriesExpensive";
// import { formatDate } from "../lib/utils";

const Categories = () => {
  const [openNew, setOpenNew] = useState(false);
  const handleClose = () => setOpenNew(false)
  return (
    <section className="flex flex-col gap-4">
      <Button
        onClick={() => {
          setOpenNew(true);
        }}
        variant={"new"}
        className={`${openNew ? "hidden" : "block"} border-2 mb-4 `}
      >
        + Nueva Categoria
      </Button>
      {openNew && <CategoriesForm onClose = {handleClose}/>}

      <Card
        className={`shadow-slate-400 w-full h-auto border-2 p-4 rounded-xl`}
      >
        <RecentCategoriesExpensive />
      </Card>
      <Card
        className={`shadow-slate-400 w-full h-auto border-2 p-4 rounded-xl`}
      >
       
      </Card>
    </section>
  );
};

export default Categories;
