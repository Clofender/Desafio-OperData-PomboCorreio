<h1 align="center" style="font-weight: bold;">
  Desafio Técnico OperData - Delivery Aéreo do Sr. Moraes
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge" alt="TypeORM">
  <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

Esta é a solução para o desafio técnico proposto, que consiste em desenvolver uma aplicação fullstack para gerenciar o serviço de delivery aéreo do Sr. Moraes Moreira.

O negócio, de forma lúdica e orgânica, utiliza pombos-correio para a entrega de cartas, e esta aplicação visa digitalizar e otimizar a gestão desse serviço. A solução é composta por uma API REST em Node.js e um frontend em React.js.

## ✨ Funcionalidades Implementadas

### Backend (API REST - NestJS)

  - **Gestão de Pombos-Correio**
      - Cadastro de novos pombos com informações como apelido, foto e velocidade média.
      - Atualização das informações de um pombo.
      - Funcionalidade para "aposentar" um pombo, que o mantém no sistema mas o impede de ser usado em novas entregas.
  - **Gestão de Clientes**
      - Cadastro de novos clientes com nome, email, data de nascimento e endereço.
      - Atualização das informações de um cliente.
  - **Envio de Cartas**
      - Cadastro de novas cartas, associando um remetente (Cliente) e um pombo-correio.
      - Atualização do status de uma carta (`na fila`, `enviado`, `entregue`).
      - Implementação da regra de negócio que impede a alteração de status de uma carta já marcada como "entregue".

### Frontend (React)

  - **Homepage Profissional:** Uma página inicial moderna e responsiva que apresenta o serviço.
  - **Navegação Completa:** Menu de navegação (incluindo menu hamburger em telas menores) para alternar entre as diferentes seções da aplicação.
  - **Página de Pombos:**
      - Formulário para criar e editar pombos.
      - Listagem em tempo real de todos os pombos, com suas fotos.
      - Botões para editar, remover e aposentar pombos diretamente da interface.
  - **Página de Clientes:**
      - Formulário para criar e editar clientes.
      - Listagem em tempo real de todos os clientes.
      - Botões para editar e remover clientes.
  - **Página de Cartas:**
      - Formulário para envio de novas cartas, com menus de seleção para escolher clientes e pombos ativos.
      - Listagem em tempo real de todas as cartas enviadas e seus status.
      - Interface para atualização do status de cada carta.

## 🛠️ Tecnologias Utilizadas

  - **Backend:**
      - **Node.js**
      - **NestJS** (Framework)
      - **TypeScript**
      - **TypeORM** (ORM)
      - **SQLite** (Banco de Dados)
  - **Frontend:**
      - **React.js** (com Vite)
      - **TypeScript**
      - **Axios** (para comunicação com a API)
      - **React Router Dom** (para navegação)
      - **CSS Puro** (para estilização)
  - **DevOps:**
      - **Docker** e **Docker Compose** (para containerização)

## 📁 Estrutura do Projeto
O projeto foi organizado como um monorepo, com o backend e o frontend em pastas separadas para maior clareza e organização.

```
/
├── backend/                  # Aplicação da API em NestJS
│   ├── src/
│   │   ├── pombos/           # Módulo de gestão de pombos
│   │   ├── clientes/         # Módulo de gestão de clientes
│   │   ├── cartas/           # Módulo de gestão de cartas
│   │   └── main.ts           # Ponto de entrada da API
│   ├── Dockerfile            # Receita para containerizar o backend
│   └── db.sqlite             # Banco de dados da aplicação
│
├── frontend/                 # Aplicação da interface em React
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis (Formulários, Navbar, etc.)
│   │   ├── pages/            # Componentes de página (HomePage, PombosPage, etc.)
│   │   └── services/         # Funções para comunicação com a API
│   │   ├── App.tsx           # Componente principal e roteador
│   │   └── main.tsx          # Ponto de entrada do React
│   └── Dockerfile            # Receita para containerizar o frontend
│
├── docker-compose.yml        # Orquestrador dos contêineres Docker
└── README.md                 # Documentação do projeto
```

## 🚀 Como Rodar o Projeto

Existem duas maneiras de rodar a aplicação: localmente (modo de desenvolvimento) ou via Docker.

### 1\. Rodando Localmente

**Pré-requisitos:**

  * Node.js (v20 ou superior)
  * npm

**Passos:**

1.  Clone o repositório: `git clone https://github.com/Clofender/Desafio-OperData-PomboCorreio.git`

2.  Navegue até a pasta do projeto: `cd Desafio-OperData-PomboCorreio`

3.  **Inicie o Backend (em um terminal):**

    ```bash
    cd backend
    npm install
    npm run start:dev
    ```

    A API estará rodando em `http://localhost:3001`.

4.  **Inicie o Frontend (em outro terminal):**

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

    A aplicação estará acessível em `http://localhost:5173`.

### 2\. Rodando com Docker

**Pré-requisitos:**

  * Docker Desktop instalado e em execução (com suporte à virtualização ativado na BIOS/UEFI).

**Passos:**

1.  Clone o repositório e navegue até a pasta raiz do projeto.
2.  Execute o seguinte comando:

    ```bash
    docker-compose up --build
    ```
    Este comando irá construir as imagens do backend e do frontend e iniciar os dois contêineres.
      * O frontend estará acessível em `http://localhost:5173`.
      * A API estará acessível em `http://localhost:3001`.

## 📝 Endpoints da API

A coleção do Insomnia/Postman para testar os endpoints pode ser criada a partir das seguintes rotas:

| Método | Endpoint                    | Descrição                                 |
|--------|-----------------------------|-------------------------------------------|
| `POST` | `/pombos`                   | Cadastra um novo pombo.                     |
| `GET`  | `/pombos`                   | Lista todos os pombos.                    |
| `GET`  | `/pombos/:id`               | Busca um pombo por ID.                    |
| `PATCH`| `/pombos/:id`               | Atualiza um pombo.                        |
| `PATCH`| `/pombos/:id/retire`        | Aposenta um pombo.                        |
| `DELETE`| `/pombos/:id`              | Remove um pombo.                          |
| `POST` | `/clientes`                 | Cadastra um novo cliente.                 |
| `GET`  | `/clientes`                 | Lista todos os clientes.                  |
| `GET`  | `/clientes/:id`             | Busca um cliente por ID.                  |
| `PATCH`| `/clientes/:id`             | Atualiza um cliente.                      |
| `DELETE`| `/clientes/:id`            | Remove um cliente.                        |
| `POST` | `/cartas`                   | Cadastra uma nova carta.                  |
| `GET`  | `/cartas`                   | Lista todas as cartas.                    |
| `GET`  | `/cartas/:id`               | Busca uma carta por ID.                   |
| `PATCH`| `/cartas/:id/status`        | Atualiza o status de uma carta.           |