# 🎬 Video Management API - Node.js & Fastify

Uma API RESTful desenvolvida do zero para gerenciamento de vídeos. Este projeto foi criado com o objetivo de aprofundar conhecimentos práticos em back-end, Node.js e bancos de dados relacionais estruturados na nuvem.
## 🌟 Destaque Técnico: Robustez e Resiliência

Diferente de APIs convencionais de estudo, este projeto foi arquitetado com foco em segurança e previsibilidade. A integração com o **Zod** atua como um "escudo" na entrada das rotas, validando rigorosamente o *schema* de cada requisição (garantindo, por exemplo, que o sistema rejeite dados inconsistentes como textos no lugar de números) antes de qualquer interação com o banco de dados. 

Em conjunto com um tratamento de erros sólido estruturado via `try/catch`, a API devolve **respostas HTTP semânticas** (como `400 Bad Request` para validações falhas e `500 Internal Server Error` para falhas estruturais). O resultado é um back-end que não "quebra" inesperadamente, não vaza informações sensíveis do banco de dados e mantém uma comunicação clara e profissional com o cliente.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução.
- **[Fastify](https://fastify.dev/)**: Micro-framework web focado em alta performance.
- **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional.
- **[Neon Database Serverless](https://neon.tech/)**: Plataforma de banco de dados Postgres na nuvem.
- **[Zod](https://zod.dev/)**: Declaração de *schemas* e validação rigorosa de dados.

## ⚙️ Funcionalidades

O sistema permite operações completas de CRUD (Create, Read, Update, Delete) com blindagem e validação de dados:

- `POST /videos`: Criação de um novo vídeo.
- `GET /videos`: Listagem de todos os vídeos (com suporte a parâmetros de busca via query `?search=`).
- `PUT /videos/:id`: Atualização integral dos dados de um vídeo específico.
- `DELETE /videos/:id`: Exclusão de um vídeo pelo seu ID único (UUID).

### 🛡️ Boas Práticas Implementadas
- **Validação de Entrada:** O corpo das requisições é estritamente validado usando o Zod. (Ex: A API bloqueia tentativas de salvar durações com valores negativos ou em formato de texto).
- **Tratamento de Erros:** Retornos HTTP semânticos (Status `400` para *Bad Request* na validação e `500` para *Internal Server Error* tratados com Try/Catch).
- **Segurança contra Injeção SQL:** Uso de Tagged Templates nativos do módulo `@neondatabase/serverless` para higienização das queries.

## 🛠️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js instalado.
- Conta no [Neon](https://neon.tech/) para provisionar a URL do banco de dados (gratuito).

### Passo a passo

1. Clone este repositório:
```bash
git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
Acesse a pasta do projeto:
```
```Bash

cd NOME-DO-REPOSITORIO
Instale as dependências:
```
```Bash

npm install
Crie um arquivo .env na raiz do projeto (use o arquivo .env.example como base, se houver) e adicione a sua Connection String do banco de dados:

Snippet de código

DATABASE_URL="postgres://usuario:senha@host.neon.tech/nome_do_banco?sslmode=require"
Crie a tabela videos no banco de dados executando o script de setup:
```
```Bash

node create-table.js
Inicie o servidor em modo de desenvolvimento:
```
```Bash

npm run dev
A API estará disponível e escutando requisições em http://localhost:3333.
```
### 🧪 Como testar as rotas
O projeto inclui um arquivo routes.http na raiz. Você pode instalar a extensão REST Client no VS Code para ler esse arquivo e disparar requisições (POST, GET, PUT, DELETE) diretamente pelo editor de código de forma super ágil.

# Desenvolvido com 💻 por Bernardo Guimarães.
