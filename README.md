<h1 align="center">Feedget</h1>

<p align="center">
  <img alt="Preview" src="./.github/preview.png" style=>
</p>

## 💻 Projeto

Feedget é um projeto simples de um Widget de envio de feedbacks, desenvolvido pela [Rocketseat](https://www.rocketseat.com.br) durante o NLW 08 Impulse. É um projeto Full-stack com repositórios Server e Web, os deploys das duas aplicações foram feitas usando o [Railway](https://railway.app) e o [Vercel](https://vercel.com)

**Este projeto já está online, para acessar <a href="https://nlw-08-impulse-web.vercel.app">Clique aqui</a>**

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

### **<a href="https://github.com/egfs1/nlw-08-backend">Server</a>**

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://prisma.io/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io)

### **<a href="https://github.com/egfs1/nlw-08-impulse-web">Web</a>**
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org)
- [Tailwind](https://tailwindcss.com)
- [Headless UI](https://headlessui.dev)

## 🚀 Como executar

É necessário clonar os dois repositórios e rodar as duas aplicações

#

### **Server**
``` bash
$ git clone https://github.com/egfs1/nlw-08-impulse-backend.git
$ cd nlw-08-impulse-backend
```

É necessário adicionar a variável ambiente do banco de dados do prisma

```js
DATABASE_URL="dbconnector://myuser:mypassword@localhost:port/mydb"
```

Em seguida, iniciar a aplicação:
```bash
# Instalar dependências
$ yarn install

# Adicionar migrations
$ yarn prisma migrate deploy

# Executar a aplicação
$ yarn dev
```

O servidor estará rodando em `http://localhost:4000`
#

### **Web**
``` bash
$ git clone https://github.com/egfs1/nlw-08-impulse-web.git
$ cd nlw-08-impulse-web
```

É necessário adicionar a variável ambiente da API

```js
VITE_API_URL="http://localhost:4000"
```

Em seguida, iniciar a aplicação:
```bash
# Instalar dependências
$ yarn install

# Executar a aplicação
$ yarn dev
```

Por fim, a aplicação estará disponível em `http://localhost:3000`