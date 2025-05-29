import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/NavBar.css";  // Importa el estilo

const NavBar = () => {
  const navigate = useNavigate();
  const { logout, authCokie } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!authCokie) return null;

  const navItems = [
    { to: "/models", label: "Coleccion" },
    { to: "/brands", label: "Marcas" },
    { to: "/employees", label: "Empleados" },
    { to: "/categories", label: "Categorías" },
    { to: "/products", label: "Productos" },
  ];

  return (
    <nav className="navbar-green">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active logo-link" : "logo-link"
            }
          >
            EcoVision
          </NavLink>
        </div>

        {/* Botón hamburguesa (solo visible en móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            {/* SVG hamburguesa */}
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú principal (desktop) */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botón logout desktop */}
        <div className="hidden md:block">
          <button className="btn-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden px-4 pb-3">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)} // Cierra menú al click
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="btn-logout w-full text-left"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
