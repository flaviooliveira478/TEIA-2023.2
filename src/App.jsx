import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import Dispositivos from "./components/pages/Dispositivos/Dispositivos.jsx";
import Ciencia from "./components/pages/Ciencia/Ciencia.jsx";
import Tecnologia from "./components/pages/Tecnologia/Tecnologia.jsx";
import Sobre from "./components/pages/Sobre/Sobre.jsx";
import Noticias from "./components/pages/Noticias/Noticias.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dispositivos" element={<Dispositivos />} />
        <Route path="/ciencia" element={<Ciencia />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/noticias/:id" element={<Noticias />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
