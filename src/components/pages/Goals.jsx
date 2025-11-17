import React from "react";
import Card from "../ui/Card";
import { useState } from "react";
import Button from "../ui/Button";
import RecentGoals from "../goals/RecentGoals";
import GoalsForms from "../forms/GoalsForms";

const Goals = () => {
  const [isOpenPage, setIsOpenPage] = useState(false);
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
          + Nueva Meta
        </Button>
        <RecentGoals />
      </section>
      <section className={`${isOpenPage ? "block" : "hidden"}`}>
        {isOpenPage && <GoalsForms onClose={desactivePage}/>}
      </section>
    </Card>
  );
};

export default Goals;
