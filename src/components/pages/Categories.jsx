import React from "react";
import CategoriesForm from "../forms/CategoriesForm";
import Button from "../ui/Button";
import { useState } from "react";
import Card from "../ui/Card";
import { BiEdit } from "react-icons/bi";
import RecentCategories from "../categories/RecentCategories";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { formatDate } from "../lib/utils";


const Categories = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openPage, setOpenPage] = useState(false);
  const Navigate = useNavigate(); 

  const setActivePage = () => {
    setOpenPage(false)
    Navigate("/categories")
  }
  
  const setDesactivePage = () => {
    setOpenPage(true)
  }
  
  const contextValue = {
    activePage: setActivePage,
    desactivePage: setDesactivePage
  }

  const handleClose = () => setOpenNew(false);
  return (
    <>
    <section className={`flex-col gap-4 relative md:my-4 lg:my-0 ${openPage ? "hidden" : "flex"}`}>
      <Button
        onClick={() => {
          setOpenNew(true);
        }}
        variant={"new"}
        size = {""}
        className={`${openNew ? "hidden" : "block"} border-2 mb-4 text-base md:w-1/4 `}
      >
        + Nueva Categoria
      </Button>
      {openNew && <CategoriesForm onClose={handleClose} />}

      <Card
        className={`shadow-slate-400 bg-(--federal-blue) w-full h-auto border-2 p-4 rounded-xl ${
          openNew ? "hidden" : "block"
        }`}
      >
        <RecentCategories onDesable={setDesactivePage} />
      </Card>
    </section>
    <Outlet context = {contextValue}/>
    </>
  );
};

export default Categories;
