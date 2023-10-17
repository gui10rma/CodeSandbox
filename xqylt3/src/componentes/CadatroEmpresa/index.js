import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import AppNavbar from "../AppNavbar";
const CadastroEmpresa = () => {
  const navigate = useNavigate(); //navegar para a rota home
  const [estabelecimento, setestabelecimento] = useState("");
  const [tipoEstabelecimento, settipoEstabelecimento] = useState("");
  const [endereçoEstabelecimento, setendereçoEstabelecimento] = useState("");
  const [cnpj, setcnpj] = useState("");
  const [email, setemail] = useState("");
  const [Senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const handleCadastroEmpresa = async () => {
    const produto = {
      estabelecimento,
      tipoEstabelecimento,
      cnpj,
      endereçoEstabelecimento,
      email,
      Senha
    };
    try {
      const resposta = await fetch("http://localhost:8080/empresa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      });
      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar o produto.");
      }
      setMensagem("Produto cadastrado com sucesso!");
    } catch (error) {
      setMensagem(
        "Erro ao cadastrar o produto. Verifique os dados informados."
      );
    }
  };
  const handleCancelar = () => {
    // Navegar para a rota "/home"
    navigate("/home");
  };
  const title = <h2>{"Cadastar Empresa"}</h2>;
  return (
    <div>
      <AppNavbar />
      <Container>
        {title}
        <Form>
          <FormGroup>
            <Label for="estabelecimento"> estabelecimento </Label>
            <Input
              id="estabelecimento"
              type="text"
              value={estabelecimento}
              onChange={(e) => setestabelecimento(e.target.value)}
            />
            <br />
            <Label for="tipoEstabelecimento"> Tipo Estabelecimento </Label>
            <Input
              id="tipoEstabelecimento"
              type="text"
              value={tipoEstabelecimento}
              onChange={(e) => settipoEstabelecimento(e.target.value)}
            />
            <br />
            <Label for="endereçoEstabelecimento">
              {" "}
              Endereço Estabelecimento{" "}
            </Label>
            <Input
              id="custo"
              type="endereçoEstabelecimento"
              value={endereçoEstabelecimento}
              onChange={(e) => setendereçoEstabelecimento(e.target.value)}
            />
            <br />
            <Label for="cnpj"> CNPJ </Label>
            <Input
              id="cnpj"
              type="text"
              value={cnpj}
              onChange={(e) => setcnpj(e.target.value)}
            />
            <br />
            <br />
            <Label for="email"> e-mail </Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <br />
            <Label for="Senha"> Senha </Label>
            <Input
              id="Senha"
              type="text"
              value={Senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Button color="primary" onClick={handleCadastroEmpresa}>
              Cadastrar Empresa
            </Button>{" "}
            <Button color="primary" onClick={handleCancelar}>
              Voltar
            </Button>
            {mensagem && <div>{mensagem}</div>}
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
export default CadastroEmpresa;
