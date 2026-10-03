import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home";

function App() {
  const isLoggedIn =
    localStorage.getItem("chillLoggedIn") === "true";

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* HOME / BERANDA */}
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Home />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* URL TIDAK DIKENAL */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;