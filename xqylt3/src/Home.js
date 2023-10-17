import React from "react";
import "./styles.css";
import AppNavbar from "./componentes/AppNavbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <AppNavbar />
      {/* Outros componentes e rotas */}
      <Link to="/empresa">Consultar catalogo de empresas </Link>
      <p></p>
      <Link to="/empresa/cadastrar">Cadastrar Empresa</Link>
      <p></p>
      <Link to="/empresa/upload">Upload</Link>
    </div>
  );
};
export default Home;
