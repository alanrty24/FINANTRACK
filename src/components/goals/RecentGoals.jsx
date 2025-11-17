import React from "react";
import Card from "../ui/Card";
import useGoalsStore from "../stores/useGoalsStore";

const RecentGoals = () => {
  const { goals } = useGoalsStore();
  const recentGoals = goals.slice(0, 5);

  return (
    <Card className={`bg-(--federal-blue) p-4 rounded-2xl`}>
      <h3 className="text-white font-bold font-mono text-center text-xl mb-4">
        Metas Recientes
      </h3>
      <section>
        {
          recentGoals.length === 0 
          ? (<p className="text-white font-bold p-4 text-center text-base">No hay Registros...</p>)
          : (recentGoals.map((goal,i) => {
            return(
              <Card key={i}>
                
              </Card>
            )
          }))
        }
      </section>
    </Card>
  );
};

export default RecentGoals;
