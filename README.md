# Basics Store (em construção 🚧)

>## Descrição
>
> Aplicativo de e-commerce exclusivo para dispositivos móveis com similaridades sistêmicas a aplicações sólidas do mercado como as chinesas Shopee e Shein, e também brasileiras como Zattini, Netshoes e Kanui. Será necessário ter instalado Expo CLI, Expo Go, Docker e Node.js instalados para testagem da aplicação.

## 🧰 Bibliotecas, frameworks e ferramentas

> **⚠️ Aviso:** esta aplicação ainda está em construção até o presente momento. A estimativa mínima de finalização é em 45 dias ou mais. As ferramentas listadas abaixo estarão separados por uso atual ou ser estipulada futuramente em razão das regras de negócio.

### 🔧 Em uso

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1674280418/Github/Profile%20Markdown/react_native_uozofa.svg"/> **React Native:**  framework JavaScript para o desenvolvimento de aplicativos móveis multiplataforma. Ele permite que os desenvolvedores escrevam código em JavaScript que é executado diretamente nos dispositivos móveis, resultando em aplicativos nativos para iOS e Android

- <img height="15" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1683264432/expo_dark_icon_stspgv.png" /> **Expo:** plataforma de desenvolvimento que permite a criação de aplicativos móveis nativos utilizando React Native. Ela fornece uma série de ferramentas, bibliotecas e serviços para acelerar o desenvolvimento de aplicativos móveis

- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/> **Typescript:** linguagem de programação que estende o JavaScript adicionando tipos estáticos opcionais. O TypeScript oferece recursos avançados de tipagem, autocompletar, refatoração e verificação estática de código, o que pode aumentar a produtividade e ajudar a evitar erros em tempo de execução

- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" /> **Babel:** ferramenta de transcompilação de código JavaScript. O Babel permite que os desenvolvedores escrevam código JavaScript moderno, utilizando recursos das versões mais recentes da linguagem, e o converta para uma versão compatível com navegadores e ambientes mais antigos

- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" /> **ESLint:** ferramenta de análise de código estática que ajuda a identificar problemas de formatação, estilo e possíveis erros em código JavaScript e TypeScript. O ESLint permite configurar regras personalizadas e integrá-las ao fluxo de desenvolvimento para manter um código limpo e consistente

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1682825523/Github/Profile%20Markdown/prisma-orm_lxicqu.svg" /> **Prisma:** camada de acesso a dados (ORM) que simplifica a interação com bancos de dados relacionais. O Prisma permite definir o modelo de dados, gerar automaticamente o esquema do banco de dados e fornece um cliente poderoso para realizar consultas e operações no banco de dados

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1680288855/Github/Profile%20Markdown/docker_fpe43h.svg" /> **Docker:** ferramenta para criação, implantação e execução de aplicativos em contêineres. O Docker permite empacotar um aplicativo e suas dependências em um contêiner isolado, enquanto o Docker Compose facilita a definição e o gerenciamento de múltiplos contêineres interligados

- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" title="PostgreSQL" /> **PostgreSQL:** banco de dados relacional de código aberto. Ele fornece recursos avançados de armazenamento, consulta e manipulação de dados, sendo amplamente utilizado em aplicações web e móveis

### 🎯 Usos futuros e previstos

- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/> **Node.js:** ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Ele permite que o JavaScript seja executado no lado do servidor, permitindo a construção de aplicações web escaláveis e de alta performance

- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" /> **Nest.js:** framework de desenvolvimento para Node.js, baseado na linguagem TypeScript e na arquitetura de aplicativos orientada por módulos. O Nest.js visa fornecer uma estrutura robusta e escalável para a criação de aplicativos back-end altamente eficientes e modernos

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1684115038/dotenv_b14c3a.svg" /> **Dotenv:** biblioteca que permite carregar variáveis de ambiente a partir de um arquivo .env. Ele facilita a configuração de variáveis sensíveis, como chaves de API, em um ambiente de desenvolvimento e produção

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1684115109/jwt_de2egk.svg" /> **JSON Web Token (JWT):** padronização de tokens de acesso baseados em JSON. É amplamente utilizado para autenticação e autorização em aplicações web e APIs, permitindo o compartilhamento seguro de informações entre diferentes sistemas

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1681248042/vitest_tlww7v.png" /> **Vitest:** ferramenta de teste para aplicações baseadas em diversos frameworks e bibliotecas que permite a execução de testes unitários e de integração de forma simples e eficiente

- <img height="16" width="15" src="https://zod.dev/logo.svg" /> **Zod:** biblioteca TypeScript poderosa e expressiva para validação de dados e inferência de tipos. Com uma sintaxe concisa, ele permite definir esquemas de validação e garantir a consistência dos dados em seu código TypeScript

## 💾 Modelagem do Banco de Dados

### Tabela User 👤

**Descrição:** representa um usuário na aplicação.

| Coluna        | Descrição                                                    |
|---------------|--------------------------------------------------------------|
| id            | ID do usuário (UUID)                                        |
| name          | Nome do usuário                                             |
| email         | Email do usuário (único)                                    |
| password      | Senha do usuário                                            |
| creation_date | Data de criação do usuário                                  |
| notifications | Relação com as notificações recebidas pelo usuário          |
| cartItems     | Relação com os itens do carrinho do usuário                  |
| Wishlist      | Relação com a lista de desejos do usuário                    |

### Tabela Seller 🛒

**Descrição:** representa um vendedor na aplicação

| Coluna        | Descrição                                                    |
|---------------|--------------------------------------------------------------|
| seller_id     | ID do vendedor (UUID)                                       |
| name          | Nome do vendedor                                            |
| email         | Email do vendedor (único)                                   |
| password      | Senha do vendedor                                           |
| creation_date | Data de criação do vendedor                                  |
| products      | Relação com os produtos vendidos pelo vendedor               |
| notifications | Relação com as notificações enviadas para o vendedor         |

### Tabela Notification 🔔

**Descrição:** representa uma notificação enviada para um usuário ou vendedor

| Coluna        | Descrição                                                    |
|---------------|--------------------------------------------------------------|
| id            | ID da notificação (UUID)                                    |
| message       | Mensagem da notificação                                     |
| readCheck     | Indica se a notificação foi lida (booleano)                  |
| receipt_date  | Data de recebimento da notificação                           |
| user_id       | ID do usuário destinatário da notificação                    |
| user          | Relação com o usuário destinatário da notificação            |
| seller        | Relação com o vendedor destinatário da notificação           |
| seller_id     | ID do vendedor destinatário da notificação                   |

### Tabela Wishlist 🌟

**Descrição:** representa a lista de desejos de um usuário

| Coluna        | Descrição                                                    |
|---------------|--------------------------------------------------------------|
| user_id       | ID do usuário (único)                                       |
| user          | Relação com o usuário                                       |
| products      | Relação com os produtos adicionados à lista de desejos       |
| product_id    | ID do produto adicionado à lista de desejos                  |

### Tabela Cart 🛒

**Descrição:** representa o carrinho de compras de um usuário

| Coluna        | Descrição                                                    |
|---------------|--------------------------------------------------------------|
| user_id       | ID do usuário (único)                                       |
| user          | Relação com o usuário                                       |
| items         | Relação com os itens do carrinho de compras                  |
| creation_date | Data de criação do carrinho de compras                       |

### Tabela CartItem 🛍️

**Descrição:** representa um item do carrinho de compras

| Coluna        | Descrição                                                    |
|---------------|--------------------------------------------------------------|
| item_id       | ID do item (autoincremental)                                |
| product       | Relação com o produto                                       |
| product_id    | ID do produto                                               |
| cart          | Relação com o carrinho de compras                           |
| cart_owner    | ID do proprietário do carrinho

### Tabela ProductCategory 🏷️

**Descrição:** representa uma categoria de produto

| Coluna         | Descrição                                                  |
|----------------|------------------------------------------------------------|
| category_id    | ID da categoria (autoincremental)                          |
| name           | Nome da categoria                                         |
| creation_date  | Data de criação da categoria                               |
| products       | Relação com os produtos pertencentes à categoria           |

### Tabela Product 👕

**Descrição:** representa um produto

| Coluna          | Descrição                                                       |
|-----------------|-----------------------------------------------------------------|
| product_id      | ID do produto (UUID)                                           |
| seller          | Relação com o vendedor                                         |
| seller_id       | ID do vendedor                                                 |
| name            | Nome do produto                                                |
| price           | Preço do produto                                               |
| photos          | Relação com as fotos do produto                                 |
| colours         | Relação com as cores do produto                                 |
| product_details | Relação com os detalhes do produto                              |
| soldCount       | Quantidade de vendas do produto                                 |
| rating          | Avaliação do produto                                           |
| quantity        | Quantidade disponível do produto                               |
| creation_date   | Data de criação do produto                                      |
| stock           | Estoque do produto                                             |
| category        | Relação com a categoria do produto                              |
| category_id     | ID da categoria do produto                                     |
| isCartItem      | Relação com os itens do carrinho de compras em que o produto está|
| favouritedCount | Contagem de vezes em que o produto foi adicionado aos favoritos |
| wishlist_id     | ID da lista de desejos em que o produto foi adicionado          |

### Tabela Photo 🖼️

**Descrição:** representa uma foto associada a um produto

| Coluna       | Descrição                                                  |
|--------------|------------------------------------------------------------|
| id           | ID da foto (autoincremental)                               |
| url          | URL da foto                                               |
| product      | Relação com o produto associado à foto                     |
| product_id   | ID do produto associado à foto                             |

### Tabela Colour 🎨

**Descrição:** representa uma cor associada a um produto

| Coluna       | Descrição                                                  |
|--------------|------------------------------------------------------------|
| id           | ID da cor (autoincremental)                                |
| name         | Nome da cor                                               |
| product      | Relação com o produto associado à cor                      |
| product_id   | ID do produto associado à cor                              |

### Enum ProductGender ♂️♀️

**Descrição:** representa o gênero de um produto

| Valor   | Descrição                |
|---------|--------------------------|
| Male    | Masculino                |
| Female  | Feminino                 |
| Unissex | Unissex                  |

### Tabela Description 📝

**Descrição:** representa os detalhes de um produto

| Coluna       | Descrição                                                  |
|--------------|------------------------------------------------------------|
| id           | ID dos detalhes (autoincremental)                          |
| product_id   | ID do produto (único)                                      |
| product      | Relação com o produto associado aos detalhes               |
| gender       | Gênero do produto                                          |
| material     | Material do produto                                        |
| sleeveType   | Tipo de manga do produto                                   |

## 📑 Instalação e uso

> ### 🔨 Em construção
>
> Esta seção encontra-se em construção e em breve será preenchida com instruções detalhadas sobre como instalar e utilizar a biblioteca

## ⚖️ Termos de uso

Este projeto é de livre uso para outros sem nenhuma restrição para cópias ou forks 👍🏻

### 🖋️ Autor: Tom Alexander
