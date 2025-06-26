import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Asegúrate de importar tu contexto

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // 🔥 Aquí accedes al estado global del AuthContext
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout(); // 🔥 Cierra sesión correctamente con el contexto
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Sobre nosotros" },
    { to: "/product", label: "Productos" },
    { to: "/cart", label: "Carrito" },
  ];

  if (user) {
    navItems.push({ to: "/history", label: "Historial de compras" });
  }

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg border-b-4 border-amber-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-amber-200 font-bold drop-shadow-md"
                : "text-amber-100 hover:text-amber-200 transition-colors duration-200"
            }
          >
            EcoVision
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-amber-200 hover:text-amber-100 focus:outline-none p-2 rounded-md hover:bg-amber-800 transition-all duration-200"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-200 font-semibold drop-shadow-md px-3 py-2 rounded-md bg-amber-800"
                    : "text-amber-100 hover:text-amber-200 hover:bg-amber-800 px-3 py-2 rounded-md transition-all duration-200"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            className="bg-amber-700 hover:bg-amber-600 text-amber-50 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-amber-600"
            onClick={user ? handleLogout : handleLogin}
          >
            {user ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-amber-800 border-t border-amber-700">
          <ul className="space-y-3 pt-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-200 font-semibold block px-4 py-2 rounded-md bg-amber-700"
                      : "text-amber-100 hover:text-amber-200 hover:bg-amber-700 block px-4 py-2 rounded-md transition-all duration-200"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="w-full text-left bg-amber-700 hover:bg-amber-600 text-amber-50 px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-amber-600 mt-2"
                onClick={user ? handleLogout : handleLogin}
              >
                {user ? "Cerrar Sesión" : "Iniciar Sesión"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;