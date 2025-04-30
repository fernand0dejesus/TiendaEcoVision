import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="header-bg">
        <div className="logo">🌿 EcoVision</div>
        <h1 className="bg-title">Iniciar Sesión</h1>
      </div>

      <div className="login-form-wrapper">
        <div className="login-form">
          <h2>Bienvenido</h2>
          <hr className="divider" />
          <form>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className="login-btn">Iniciar Sesión</button>
            <button type="button" className="signup-btn">Crear Cuenta</button>
            <div className="brown-bar"></div>

          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
