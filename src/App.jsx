import React from "react";
import { Routes, Route } from "react-router-dom";
import PruebaCode from "./components/lib/pruebaCode";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/pages/Dashboard";
import Categories from "./components/pages/Categories";

const Transaction = () => {
  return <div>Transaction</div>;
};

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
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </Layout>
  );
};

export default App;
