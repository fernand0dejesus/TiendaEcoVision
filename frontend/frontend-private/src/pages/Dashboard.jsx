import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../styles/dashboard.css";

// Componente CardDashboard simplificado y estilizado
const CardDashboard = ({ label, data }) => (
  <div className="card-dashboard">
    <div className="card-label">{label}</div>
    <div className="card-data">{data}</div>
  </div>
);

const Dashboard = () => {
  const { authCokie } = useAuth();

  const [data, setData] = useState({
    employees: 0,
    brands: 0,
    models: 0,
    categories: 0,
  });

  const fetchData = async () => {
    try {
      const [employeesRes, brandsRes, modelsRes, categoriesRes] = await Promise.all([
        fetch("http://localhost:4000/api/employees"),
        fetch("http://localhost:4000/api/brands"),
        fetch("http://localhost:4000/api/models", {
          headers: { Authorization: `Bearer ${authCokie}` },
        }),
        fetch("http://localhost:4000/api/categories"),
      ]);

      const employeesData = await employeesRes.json();
      const brandsData = await brandsRes.json();
      const modelsData = await modelsRes.json();
      const categoriesData = await categoriesRes.json();

      setData({
        employees: employeesData.length,
        brands: brandsData.length,
        models: modelsData.length,
        categories: categoriesData.length,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="dashboard-container">
      <section className="dashboard-content">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-grid">
          <CardDashboard label="Empleados" data={data.employees} />
          <CardDashboard label="Marcas" data={data.brands} />
          <CardDashboard label="Modelos" data={data.models} />
          <CardDashboard label="Categorías" data={data.categories} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
