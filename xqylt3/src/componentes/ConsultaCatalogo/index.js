import { useState, useEffect } from "react";
import "./styles.css";
const ConsultaCatalogo = () => {
  const [Empresa, setEmpresa] = useState([]);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/empresa");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json(); //retorna um array de objetos json
        //apresenta os dados na console como um string json
        console.log(JSON.stringify(dados));
        //carrega os dados na variavel produto
        setEmpresa(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);
  if (erro)
    return (
      <>
        <h3>Consulta Catalogo </h3>
        <p>Erro na consulta: {erro}</p>
      </>
    );
  return (
    <div>
      <h3>Consulta Catalogo </h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>estabelecimento</th>
            <th>tipoEstabelecimento</th>
            <th>endereçoEstabelecimento</th>
            <th>cnpj</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {Empresa.map((Empresa) => (
            <tr key={Empresa.id}>
              <td>{Empresa.id}</td>
              <td>{Empresa.estabelecimento}</td>
              <td>{Empresa.tipoEstabelecimento}</td>
              <td>{Empresa.endereçoEstabelecimento}</td>
              <td>{Empresa.cnpj}</td>
              <td>{Empresa.email}</td>
              <td>{Empresa.senha}</td>
              <td>{Empresa.statusIncricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ConsultaCatalogo;
