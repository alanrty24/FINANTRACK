import React from "react";
import { NEWCATEGORIES } from "../lib/categories";
import Card from "../ui/Card";
import { IoMdClose } from "react-icons/io";
import Button from "../ui/Button";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";

const IconsSelect = ({ onChange, iconValue, onName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(iconValue);

  useEffect(()=> {
    if (iconValue && icon.icon !== iconValue.icon && iconValue.icon !== "") {
      setIcon(iconValue);
      onName(iconValue.name)
    }
  } , [icon , iconValue]); 


  const handleClickAddIcon = (newCat) => {
    setIcon({
      id: newCat.id,
      icon: newCat.icon,
    });

    setIsOpen(false);
    onName(newCat.name)
    onChange(newCat);
  };

  return (
    <Card className={"flex flex-col text-2xl "}>
      <div 
      className={`fixed inset-0 bg-slate-200 opacity-60 ${isOpen ? "block" : "hidden"}`} 
      onClick={() => setIsOpen(false)}
      />
      
      <div className="flex flex-col items-center justify-center p-4  shadow-lg shadow-slate-500 border-0 space-x-4 mb-2 w-full font-bold rounded-2xl text-2xl lg:px-4 lg:py-2">
        <h3 className="font-mono text-xl md:text-2xl">Seleccione un Icono</h3>
        <div className="inline-flex space-x-4 p-4">
          <Button
            className={`text-base border-2 ${isOpen ? "hidden" : "block"} `}
            variant={`${icon.icon === "" ? "new" : "change"}`}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {icon.icon === "" ? "New" : <FiEdit />}
          </Button>
          <div
            className={`justify-center items-center ${
              icon.id === "" ? "hidden" : "flex"
            }`}
          >
            <div className="p-2 rounded-xl bg-(--vivid-sky-blue) border-2 border-(--federal-blue)">
              {icon.icon}
            </div>
          </div>
        </div>
      </div>

      <Card
        className={`my-2 py-6 px-4 bg-(--federal-blue) text-white absolute z-10  backdrop-blur-3xl shadow-slate-600 shadow-xs w-full inset-x-0 ${
          isOpen ? "inline-flex" : "hidden"
        } flex-col gap-4 rounded-2xl`}
      >
        <Button
          className={"p-2 absolute top-0 right-0 "}
          variant={"close"}
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose className="w-5 h-5 text-red-600 hover:font-bold" />
        </Button>

              <h3 className="font-bold text-(--light-cyan) text-center">
                Categories
              </h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {NEWCATEGORIES.map((newCat) => {
                  return (
                    <li
                      key={newCat.id}
                      className="flex justify-center items-center hover:cursor-pointer "
                      onClick={() => {
                        handleClickAddIcon({
                          ...newCat,
                          type: "expense",
                        });
                      }}
                      value={icon}
                    >
                      <div className="p-2 rounded-lg bg-(--vivid-sky-blue)">
                        {newCat.icon}
                      </div>
                    </li>
                  );
                })}
              </ul>
      </Card>
    </Card>
  );
};

export default IconsSelect;
