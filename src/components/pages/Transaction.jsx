import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import RecentTransaction from "../dashboard/RecentTransaction";
import { useState } from "react";
import TransactionsForm from "../forms/TransactionsForm";

const Transaction = () => {
  const [isOpenPage, setIsOpenPage] = useState(false);

  // const activePage = () => {
  //     setIsOpenPage(true)
  // }

  const desactivePage = () => {
    setIsOpenPage(false);
  };

  return (
    <Card>
      <section className={`flex-col gap-4 ${isOpenPage ? "hidden" : "flex"}`}>
        <Button
          variant={"new"}
          className={`w-full lg:w-1/4`}
          onClick={() => {
            setIsOpenPage(true);
          }}
        >
          + Nueva Transacción
        </Button>
        <RecentTransaction />
      </section>
      <section 
      className={`${isOpenPage ? "block" : "hidden"}`}
      >
        {isOpenPage && <TransactionsForm onClose={desactivePage} />}
      </section>
    </Card>
  );
};

export default Transaction;
