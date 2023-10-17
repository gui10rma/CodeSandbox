import Home from "./Home";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import CadastroEmpresa from "./componentes/CadatroEmpresa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/empresa" element={<ConsultaCatalogo />} />
        <Route path="/empresa/cadastrar" element={<CadastroEmpresa />} />
      </Routes>
    </Router>
  );
};
export default App;
