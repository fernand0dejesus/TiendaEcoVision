import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginRegister = () => {
  const { login, register } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
    dui: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!form.email || !form.password) {
        return toast.error("Por favor, complete el correo y la contraseña.");
      }
      const success = await login(form.email, form.password);
      if (success) {
        navigate("/dashboard");
      }
    } else {
      const {
        name,
        lastName,
        email,
        password,
        confirmPassword,
        telephone,
        dui,
      } = form;

      if (
        !name ||
        !lastName ||
        !email ||
        !password ||
        !confirmPassword ||
        !telephone ||
        !dui
      ) {
        return toast.error("Por favor, complete todos los campos.");
      }

      if (password !== confirmPassword) {
        return toast.error("Las contraseñas no coinciden.");
      }

      const success = await register({
        name,
        lastName,
        email,
        password,
        telephone: Number(telephone),
        dui,
      });

      if (success) {
        setIsLogin(true);
        setForm({
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          telephone: "",
          dui: "",
        });
      }
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen relative"
      style={{
        background: `linear-gradient(135deg, rgba(101, 67, 33, 0.9) 0%, rgba(139, 110, 75, 0.85) 50%, rgba(160, 140, 115, 0.8) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="sustainable-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%23654321" opacity="0.1"/><path d="M20 20 Q40 10 60 20 Q40 30 20 20" fill="%238B6E47" opacity="0.05"/><rect x="10" y="60" width="60" height="1" fill="%23A08C73" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23sustainable-pattern)"/></svg>')`,
        backgroundSize: 'cover, 80px 80px',
        backgroundPosition: 'center, 0 0'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-800">
            <path d="M50 10 Q30 30 30 50 Q30 70 50 90 Q70 70 70 50 Q70 30 50 10z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-12 h-12 opacity-15 rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-800">
            <path d="M50 10 Q30 30 30 50 Q30 70 50 90 Q70 70 70 50 Q70 30 50 10z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-5 w-8 h-8 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-700">
            <circle cx="50" cy="50" r="40"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-amber-200 relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        {/* Patrón decorativo en el contenedor */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700"></div>
        
        {/* Icono decorativo */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-yellow-700 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8z"/>
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#92400e', fontFamily: 'serif' }}>
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  border: '2px solid #fbbf24',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#92400e'
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  border: '2px solid #fbbf24',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#92400e'
                }}
              />
              <input
                type="text"
                name="telephone"
                placeholder="Teléfono (8 dígitos)"
                value={form.telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  border: '2px solid #fbbf24',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#92400e'
                }}
              />
              <input
                type="text"
                name="dui"
                placeholder="DUI (12345678-9)"
                value={form.dui}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  border: '2px solid #fbbf24',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#92400e'
                }}
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl transition-all duration-300"
            style={{
              border: '2px solid #fbbf24',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#92400e'
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl transition-all duration-300"
            style={{
              border: '2px solid #fbbf24',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#92400e'
            }}
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl transition-all duration-300"
              style={{
                border: '2px solid #fbbf24',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: '#92400e'
              }}
            />
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #b45309, #d97706)',
              color: 'white'
            }}
          >
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm" style={{ color: '#b45309' }}>
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-semibold hover:underline transition-colors duration-300"
            style={{ color: '#92400e' }}
          >
            {isLogin ? "Registrarse" : "Iniciar sesión"}
          </button>
        </p>

        {/* Pequeño texto decorativo */}
        <div className="mt-4 text-center">
          <p className="text-xs italic" style={{ color: 'rgba(180, 83, 9, 0.7)' }}>
            Moda consciente • Estilo sostenible
          </p>
        </div>

        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default LoginRegister;