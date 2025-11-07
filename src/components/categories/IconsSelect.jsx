import React from "react";
import { NEWCATEGORIES } from "../lib/categories";
import Card from "../ui/Card";
import { IoMdClose } from "react-icons/io";
import Button from "../ui/Button";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

const IconsSelect = ({onChange}) => {
  const types = ["expense", "income"];
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState({
    id: 0,
    type: "",
    icon: "",
  });

  const handleClickAddIcon = (newCat) => {

    setIcon({
      id: newCat.id,
      type: newCat.type,
      icon: newCat.icon,
    });

    setIsOpen(false); 

    onChange(
      newCat.icon
    );
  }

  return (
    <Card className={"flex flex-col text-2xl"}>
      <div className="flex flex-col items-center justify-center p-4 shadow-lg shadow-slate-500 border-0 space-x-4 mb-4 w-full font-bold rounded-2xl text-2xl">
        <h3 className="font-mono">Select Icon</h3>
        <div className="inline-flex space-x-4 p-4">
        <Button
          className={`text-xl border-2 ${isOpen ? "hidden" : "block"} `}
          variant={`${icon.icon === '' ? "new" : "change"}`}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {icon.icon === '' ? "New" : <FiEdit />}
        </Button>
        <div className={`justify-center items-center ${icon.id === 0 ? "hidden" : "flex"}`}>
          <div className="p-2 rounded-xl bg-(--vivid-sky-blue) border-2 border-(--federal-blue)">
            {icon.icon}
          </div>
        </div>
        </div>
      </div>

      <Card
        className={`my-2 p-4 bg-(--federal-blue) text-white absolute z-10  backdrop-blur-3xl shadow-slate-600 shadow-xs w-full top-1/2 ${
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
        {types.map((type, i) => {
          return (
            <section key={i} className="flex flex-col gap-2">
              <h3 className="font-bold text-(--light-cyan) text-center">
                {types[i].toUpperCase()}
              </h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {types[i] === "expense"
                  ? NEWCATEGORIES.expense.map((newCat) => {
                      return (
                        <li
                          key={newCat.id}
                          className="flex justify-center items-center hover:cursor-pointer "
                          onClick={() => {
                            handleClickAddIcon(newCat)
                          }
                          }
                          value={icon}
                        >
                          <div className="p-2 rounded-lg bg-(--vivid-sky-blue)">
                            {newCat.icon}
                          </div>
                        </li>
                      );
                    })
                  : NEWCATEGORIES.income.map((newCat) => {
                      return (
                        <li
                          key={newCat.id}
                          className="flex justify-center items-center hover:cursor-pointer "
                          onClick={() => {
                            handleClickAddIcon(newCat)
                          }
                          }
                          value={icon}
                        >
                          <div className="p-2 rounded-lg bg-(--vivid-sky-blue)">
                            {newCat.icon}
                          </div>
                        </li>
                      );
                    })}
              </ul>
            </section>
          );
        })}
      </Card>
    </Card>
  );
};

export default IconsSelect;
