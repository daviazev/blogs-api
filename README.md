# Blogs API

![Print da tela do projeto na plataforma da Trybe](./print.png)

## Sobre

Store Manager é um projeto desenvolvido durante o módulo de backend no curso da Trybe. O objetivo é criar uma API para um blog usando o ORM Sequelize.

Os códigos desenvolvidos por mim podem ser encontrados nas pastas `src`.

## Ferramentas usadas

- Docker
- Express
- Node
- Joi
- Sequelize
- MySQL

## Orientações 

<details>
<summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />

### Com Docker 

- Clone o repositório com o comando `git@github.com:daviazev/blogs-api.git`
- Entre na pasta com o comando `cd blogs-api`
> Tendo o Docker e o Docker Compose instalados, rode usando o comando `docker-compose up -d`
- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
> Use o comando `docker exec -it blogs_api bash`
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
> Instale as dependências [Caso existam] com `npm install`
> Execute a aplicação com `npm start`

### Sem Docker

- Clone o repositório com o comando `git@github.com:daviazev/blogs-api.git`
- Entre na pasta com o comando `cd blogs-api`
- Instale as dependências [Caso existam] com `npm install`

1. Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` na versão `16` instalado em seu computador.
