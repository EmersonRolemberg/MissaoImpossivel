import { Routes, Route } from "react-router-dom";
import Usuarios from "../pages/Clientes/c";
import CadastrarUsuarios from "../pages/CadastrarUsuarios/CadastrarUsuarios"

const Rotas = () => {
  return (
    <Routes>
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="/usuarios/cadastro" element={<CadastrarUsuarios/>} />
    </Routes>
  );
};

export default Rotas;
