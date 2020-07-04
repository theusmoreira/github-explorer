import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/52337444?s=460&u=98daaab916965e0330ef6552c0e879eb75e51bb1&v=4"
            alt="Matheus"
          />
          <div>
            <strong>Matheus santos</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
