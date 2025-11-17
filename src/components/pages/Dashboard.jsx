import React from "react";
import Card from "../ui/Card";
import BalanceCard from "../dashboard/BalanceCard";
import RecentTransaction from "../dashboard/RecentTransaction";

const Dashboard = () => {
  return (
    <Card className={`flex flex-col gap-4`}>
      <Card>
        <h1 className="font-bold text-xl font-mono text-center md:text-start">
          Bienvenido aL Finantrack 💸
        </h1>
      </Card>
      <Card>
        <BalanceCard />
      </Card>
      <Card className={`flex flex-col gap-2 md:flex-row`}> 
        <section>
          <RecentTransaction />
        </section>
        <section>
            
        </section>
      </Card>
    </Card>
  );
};

export default Dashboard;
