import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../styles/login.CSS"; // Asegúrate de importar tu archivo CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }
    const result = await login(email, password);

    if (!result.success) {
      toast.error(result.message || "Credenciales incorrectas.");
      return;
    }

    // Redirigir a dashboard u otra página tras login exitoso
    navigate("/employees");
  };

  useEffect(() => {
    const miCookie = localStorage.getItem("authToken");
    console.log(miCookie, "cookie desde el login useEffect");
  }, []);

  return (
    <div className="login-page">
      <div className="logo">EcoVision</div>

      <div className="login-form-wrapper">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Iniciar Sesión</h2>
          <hr className="divider" />
          <input
            type="text"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">Ingresar</button>
        </form>
      </div>

      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default Login;
