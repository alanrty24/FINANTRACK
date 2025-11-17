import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Dashboard from "./components/pages/Dashboard";
import Categories from "./components/pages/Categories";
import CategoryList from "./components/categories/CategoryList";
import CategoryEdit from "./components/categories/CategoryEdit";
import CategoryAll from "./components/categories/CategoryAll";
import Transaction from "./components/pages/Transaction";
import Goals from "./components/pages/Goals";


const Analytics = () => {
  return <div>Analytics</div>;
};

const Configuration = () => {
  return <div>Configuration</div>;
};

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />}>
          
        </Route>
        <Route path="/categories" element={<Categories />}>
          <Route path=":id" element={<CategoryList />}/>
          <Route path=":id/edit" element={<CategoryEdit />}/>
          <Route path="all" element={<CategoryAll />}/>
        </Route>
        <Route path="/goals" element={<Goals />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </Layout>
  );
};

export default App;
