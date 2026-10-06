# Portfólio Profissional

## 📌 Sobre o Projeto

Este projeto consiste no desenvolvimento de um **portfólio profissional pessoal**, criado como parte da disciplina **Desenvolvimento e Integração de Aplicações Web**, do curso de Engenharia de Software.

O objetivo é desenvolver uma aplicação web moderna, responsiva e acessível para apresentar minha trajetória acadêmica e profissional, minhas habilidades, projetos desenvolvidos, experiências e formas de contato.

Além de atender aos requisitos acadêmicos da disciplina, o projeto será desenvolvido com foco em sua utilização como **portfólio profissional real**, podendo ser utilizado posteriormente para apresentação em processos seletivos e oportunidades na área de tecnologia.

---

## 🎯 Objetivos

- Apresentar minha formação e trajetória profissional;
- Exibir projetos desenvolvidos durante minha formação e estudos;
- Apresentar minhas habilidades e tecnologias que possuo conhecimento;
- Disponibilizar minhas experiências acadêmicas e profissionais;
- Facilitar o contato por meio de diferentes canais;
- Desenvolver uma aplicação web utilizando arquitetura Front-end e Back-end;
- Aplicar conceitos de desenvolvimento de APIs, banco de dados, versionamento e hospedagem em nuvem;
- Criar uma aplicação responsiva e acessível em diferentes dispositivos.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- React
- Vite
- React Router
- Axios
- CSS

### Back-end

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven

### Banco de Dados

- PostgreSQL

### Ferramentas e Serviços

- Git
- GitHub
- Figma
- Vercel
- Render

---

## 🏗️ Arquitetura

O sistema será desenvolvido utilizando uma arquitetura separando o Front-end do Back-end.

```text
┌──────────────────────┐
│       Usuário        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Vercel         │
│    React + Vite      │
└──────────┬───────────┘
           │
           │ HTTP / REST API
           ▼
┌──────────────────────┐
│       Render         │
│     Spring Boot      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      PostgreSQL      │
└──────────────────────┘
```

O Front-end será responsável pela interface e interação com o usuário, enquanto o Back-end será responsável pela disponibilização das APIs, regras de negócio e comunicação com o banco de dados.

---

## 📂 Estrutura do Projeto

```text
portfolio-profissional/
│
├── frontend/
│   └── portfolio-react/
│
├── backend/
│   └── portfolio-api/
│
├── docs/
│   └── prototipos/
│
└── README.md
```

### Front-end

```text
frontend/
└── portfolio-react/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

### Back-end

```text
backend/
└── portfolio-api/
    └── src/
        └── main/
            ├── java/
            │   └── .../
            │       ├── controller/
            │       ├── service/
            │       ├── repository/
            │       ├── model/
            │       └── config/
            │
            └── resources/
                └── application.properties
```

---

## 📄 Funcionalidades

O portfólio será dividido nas seguintes seções:

### Sobre Mim

Apresentação pessoal em português e inglês, contendo informações sobre:

- Formação;
- Área de interesse;
- Habilidades;
- Tecnologias;
- Objetivos profissionais.

### Projetos

Apresentação dos projetos desenvolvidos, organizados em uma linha do tempo.

Cada projeto poderá apresentar:

- Nome;
- Descrição;
- Tecnologias utilizadas;
- Período de desenvolvimento;
- Link para o GitHub;
- Imagem ou GIF demonstrando o funcionamento.

### Experiências

Apresentação das experiências acadêmicas e profissionais, contendo:

- Empresa ou instituição;
- Cargo ou atividade;
- Período;
- Descrição da experiência.

### Contato

Área destinada ao contato profissional, contendo:

- E-mail;
- WhatsApp;
- LinkedIn;
- GitHub;
- Formulário de contato.

O formulário será integrado ao Back-end para processamento das mensagens.

---

## 🗄️ Dados

O sistema utilizará um banco de dados PostgreSQL para armazenar informações relacionadas ao portfólio.

As principais entidades previstas inicialmente são:

### Projeto

```text
Projeto
├── id
├── nome
├── descricao
├── tecnologias
├── githubUrl
├── imagemUrl
├── dataInicio
└── dataFim
```

### Experiência

```text
Experiencia
├── id
├── empresa
├── cargo
├── descricao
├── dataInicio
└── dataFim
```

### Mensagem

```text
Mensagem
├── id
├── nome
├── email
├── mensagem
└── dataEnvio
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Java;
- Maven;
- Node.js;
- npm;
- Git;
- PostgreSQL.

### Front-end

Entre na pasta do Front-end:

```bash
cd frontend/portfolio-react
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Front-end será disponibilizado localmente pelo Vite.

### Back-end

Entre na pasta do Back-end:

```bash
cd backend/portfolio-api
```

Execute a aplicação utilizando Maven:

```bash
./mvnw spring-boot:run
```

No Windows, caso necessário:

```bash
mvnw.cmd spring-boot:run
```

---

## 🌐 Deploy

O projeto será disponibilizado em serviços de hospedagem em nuvem.

### Front-end

**Vercel:**  
A definir após o deploy.

### Back-end

**Render:**  
A definir após o deploy.

### Banco de Dados

**PostgreSQL:**  
A definir após a configuração do ambiente de produção.

---

## 🎨 Protótipos

Os protótipos das interfaces serão desenvolvidos utilizando o Figma.

### Sobre Mim

> Inserir imagem do protótipo aqui.

### Projetos

> Inserir imagem do protótipo aqui.

### Experiências

> Inserir imagem do protótipo aqui.

### Contato

> Inserir imagem do protótipo aqui.

---

## 📱 Responsividade

O sistema será desenvolvido com design responsivo, permitindo sua utilização em diferentes tamanhos de tela, incluindo:

- Computadores;
- Notebooks;
- Tablets;
- Smartphones.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido por **Giovanni**, estudante de Engenharia de Software.

O desenvolvimento será realizado utilizando Git e GitHub para controle de versão e organização do código-fonte.

---

## 📚 Referências

- React
- Vite
- Spring Boot
- PostgreSQL
- Vercel
- Render
- Figma
- GitHub