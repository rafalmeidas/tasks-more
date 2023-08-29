[![Front-End Tests](https://github.com/rafalmeidas/tasks-more/actions/workflows/front-end-tests.yml/badge.svg?branch=main)](https://github.com/rafalmeidas/tasks-more/actions/workflows/front-end-tests.yml)

# 👋 Tarefas+

O projeto 'Tarefas+' é um aplicativo web que torna o gerenciamento das suas atividades diárias mais simples e eficiente. Com suporte ao login via Google Account, você pode começar a cadastrar e organizar suas tarefas imediatamente. Além disso, o aplicativo oferece a funcionalidade de adicionar comentários para atividades públicas, facilitando a colaboração em projetos compartilhados.

## 📚 Índice

- [ℹ️ Sobre](#ℹ%EF%B8%8F-sobre)

- [✨ Recursos](#-recursos)

- [🛠️ Pré-requisitos](#%EF%B8%8F-pré-requisitos)

- [⚙️ Instalação](#%EF%B8%8F-instalação)

- [🧪 Testar](#-testar)

- [🚀 Como Usar](#-como-usar)

- [🤝 Contribuição](#contribuição)

- [📝 Licença](#-licença)

## ℹ️ Sobre

O 'Tarefas+' é uma aplicação web excepcionalmente moderna e altamente eficiente, meticulosamente construída utilizando a poderosa combinação de Next.js e Firebase, líderes em suas respectivas áreas. Esta aplicação revoluciona a maneira como gerenciamos tarefas, oferecendo uma experiência incomparável.

Desenvolvido com o framework Next.js, o 'Tarefas+' aproveita ao máximo os recursos de Server-Side Rendering (SSR) e Static Site Generation (SSG), resultando em tempos de carregamento ultra-rápidos e uma navegação suave e responsiva. Além disso, a integração perfeita com o Firebase, incluindo o Firebase Realtime Database, permite uma colaboração em tempo real entre os usuários, tornando a experiência de gerenciamento de tarefas verdadeiramente colaborativa e dinâmica.

Um dos aspectos mais notáveis do 'Tarefas+' é o seu sistema de login. Os usuários podem facilmente acessar a plataforma usando suas contas do Google, garantindo autenticação segura e simplificada. Isso proporciona uma entrada rápida e livre de complicações, permitindo que os usuários se concentrem no que realmente importa: gerenciar suas tarefas de maneira eficaz.

O desenvolvimento desta aplicação foi apoiado por um conjunto abrangente de testes. Através do uso de ferramentas como Jest, React Testing Library e Cypress, o 'Tarefas+' foi submetido a rigorosos testes automatizados. Isso garante que a aplicação seja robusta, confiável e livre de erros, proporcionando aos usuários uma experiência de uso excepcional.

Em resumo, o 'Tarefas+' é mais do que apenas uma aplicação de gerenciamento de tarefas. É uma obra-prima tecnológica que utiliza Next.js e Firebase para fornecer desempenho incomparável, colaboração em tempo real, autenticação perfeita e qualidade testada. Seja para um usuário individual ou para equipes colaborativas, o 'Tarefas+' define um novo padrão de excelência no gerenciamento de tarefas online.

## ✨ Recursos

A aplicação oferece:

1.  **Cadastro de Atividades:** Registre suas tarefas e organize seu dia de maneira eficiente.

2.  **Comentários em Tempo Real para Atividades Públicas:** Adicione e visualize comentários em tempo real para atividades públicas, promovendo a colaboração instantânea.

3.  **Login via Google Accounts:** Acesse rapidamente suas atividades e interaja com outros usuários usando sua conta do Google.

4.  **Firebase Realtime Database:** Utiliza o Firebase Realtime Database para armazenar e sincronizar dados em tempo real, garantindo atualizações em tempo real e uma experiência de colaboração mais dinâmica.

5.  **Server-Side Rendering (SSR) e Static Site Generation (SSG) com Next.js:** Aproveita os recursos avançados do Next.js para otimizar o desempenho e a renderização da aplicação, proporcionando tempos de carregamento mais rápidos e uma melhor experiência do usuário.

## 🛠️ Pré-requisitos

Antes de começar a usar o projeto 'Tarefas+', certifique-se de que você tenha os seguintes requisitos atendidos:

### Conhecimentos Necessários

- Familiaridade com desenvolvimento front-end e conceitos básicos de React e NextJS.

- Compreensão de testes unitários e familiaridade com a estrutura de testes Jest e Cypress.

### Estrutura do Projeto e Libs

#### Estrutura do Projeto

```

search d_evs/

│

├─ src/

│ ├─ **tests**/ # Testes de unidade e integração

│ │

│ ├─ components/ # Componentes reutilizáveis

│ │ ├─ Button.tsx # Componente de botão

│ │ ├─ Header.tsx # Componente de cabeçalho

│ │ ├─ Textarea.tsx # Componente de input textarea

│ │

│ ├─ pages/ # Páginas da aplicação

| | ├─ api/auth/ # Configurações do next/auth

│ │ ├─ Dashboard.tsx # Página de cadastro de tarefas

│ │ ├─ Task.tsx # Página de detalhes de uma tarefa

│ │ ├─ Home.tsx # Página inicial

│ │ ├─ App.tsx # Componente raiz da aplicação

│ │ ├─ Document.tsx # Ponto de entrada da renderização

│ │

│ ├─ services/ # Serviços de integração com APIs

│ │ ├─ firebaseConnection.ts # Configuração do Firebase

│ │

│

├─ env.sample # Arquivo de configuração de variáveis de exemplo

├─ jest.config.mjs # Configuração do jest

├─ README.md # Documentação do projeto

└─ package.json # Informações e dependências do projeto

```

#### Libs

Bibliotecas utilizadas e motivação:

- **Firebase:** Desperte a magia nos seus aplicativos com o Firebase! Com recursos integrados de autenticação, armazenamento, bancos de dados em tempo real e até mesmo funções personalizadas em nuvem, o Firebase torna o desenvolvimento mais rápido e eficiente. Além disso, sua capacidade de colaboração em tempo real e análises detalhadas de desempenho garantem que você crie uma experiência excepcional para os usuários. Experimente o Firebase e transforme suas ideias em realidade digital de maneira simples e poderosa! ✨🔥

- **NextAuth:** Eleve a segurança e a autenticação da sua aplicação Next.js com o NextAuth.js! Com essa biblioteca de autenticação, você economiza tempo e oferece uma experiência excepcional aos usuários.
  Imagine integrar facilmente provedores de autenticação como Google, Facebook e GitHub. O NextAuth.js simplifica esse processo, permitindo que os usuários acessem sua aplicação de maneira rápida e segura, usando suas credenciais preferidas.

  Além disso, a segurança é prioridade. O NextAuth.js protege contra ameaças, como ataques de força bruta e cross-site scripting (XSS), garantindo a autenticação dos usuários e a integridade dos dados. É fácil de usar. Com um fluxo de autenticação simples, você se concentra no desenvolvimento das funcionalidades principais da sua aplicação.

  O NextAuth.js simplifica a autenticação na sua aplicação Next.js, oferecendo segurança, integração e uma experiência aprimorada para o usuário. Incorporar o NextAuth.js significa autenticação tranquila e segura para seus usuários, permitindo que você se concentre em construir uma aplicação excepcional.

  Para mais detalhes sobre a configuração [Acesse](https://next-auth.js.org/getting-started/example)

## ⚙️ Instalação

- [Node.js - v18.17.1 ou superior](https://nodejs.org/): O projeto utiliza o Node.js para executar e construir a aplicação. Certifique-se de ter o Node.js instalado em sua máquina.

- [NPM - v9.6.7 ou superior](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/): O gerenciador de pacotes Node.js é necessário para instalar e gerenciar as dependências do projeto.

Passo 1 - **Clone o repositório do projeto para sua máquina local usando o seguinte comando:**

```sh



git clone https://github.com/rafalmeidas/tasks-more.git



```

Passo 2 - **Ou [baixe](https://github.com/rafalmeidas/tasks-more/archive/refs/heads/main.zip) o .zip e descompacte:**

Passo 3 - **Navegue para a pasta do projeto usando o terminal:**

```sh



cd  tasks-more



```

Passo 4 - **Instale as dependências do projeto usando NPM ou Yarn. Escolha um dos comandos abaixo:**

```sh



npm  install



```

ou

```sh



yarn  install



```

Passo 5 - **Conecte um banco de dados firebase a aplicação:**
Crie um cópia do arquivo **.env-sample** e renomeie apenas para **.env**

Anotações para os atributos:

- GOOGLE_CLIENT_ID= crie um novo projeto no firebase e cole o clientId [Firebase](https://console.cloud.google.com/apis/credentials?pli=1&project=to-do-dashboard-396721)
- GOOGLE_CLIENT_SECRET= crie um novo projeto no firebase e cole o clientSecret [Firebase](https://console.cloud.google.com/apis/credentials?pli=1&project=to-do-dashboard-396721)
- JWT_SECRET= Gere uma chave md5 neste [site](https://www.md5hashgenerator.com/), a partir de uma string secreta e coloque ela como o valor;

Passo 6 - **Inicie a Aplicação:**

```sh



npm  run  dev



```

ou

```sh



yarn  dev



```

Pronto, basta acessar um navegador de sua preferência, e acessar o link a seguir:

- [🌐 Search d_evs](http://localhost:3000/)

Passo 6 - **Gerar Build de Deploy (Opcional):**

```sh



npm  run  build



```

ou

```sh



yarn  build



```

## 🧪 Testar

Após efetuar o passo de [⚙️ Instalação](#instalação) execute o seguinte comando:

```sh



npm  run  test



```

ou

```sh



yarn  test



```

## 🚀 Como Usar

Após concluir a instalação e configuração do projeto 'Tarefas+', siga atentamente os passos abaixo para mergulhar na experiência completa da aplicação:

1 - **Acesso à Tela Principal:**

Ao iniciar o aplicativo, você será automaticamente direcionado para a tela principal. Nessa página, duas caixas informativas mostrarão a contagem atual de postagens e comentários na aplicação. Para acessar a aplicação, clique no botão "Acessar" e efetue o login utilizando sua conta do Gmail. Ao realizar o login, o botão "Meu Painel" se tornará disponível, permitindo o acesso ao seu painel pessoal de tarefas cadastradas.

2 - **Meu Painel:**

No painel pessoal, você pode cadastrar novas tarefas, com a opção de marcá-las como públicas. Tarefas públicas são acessíveis a todos os usuários e podem receber comentários de outros participantes.

Ações que podem ser realizadas em uma tarefa listada em "Minhas tarefas":

- Compartilhar (Clicando no botão de compartilhamento, o link da tarefa é automaticamente copiado);
- Excluir uma tarefa (Clicando no botão de exclusão, a tarefa é removida da lista);
- Visualizar detalhes da tarefa (Ao tratar-se de uma tarefa pública, clicar em sua descrição redirecionará para a tela de detalhes da tarefa).

3 - **Tela de Detalhes da tarefa:**

Na tela de detalhes da tarefa, todos os comentários relacionados àquela tarefa são exibidos. Caso você seja o autor de um comentário, é possível excluí-lo a qualquer momento.

6 - **Redirecionamento para a Tela Home:**

Independente de qual tela esteja visualizando, ao clicar no logotipo "Tarefas+" no cabeçalho, você será instantaneamente redirecionado de volta para a tela principal.

Agora você está completamente preparado para explorar e aproveitar ao máximo todas as funcionalidades oferecidas pelo projeto 'Tarefas+'. Divirta-se enquanto navega e utiliza todas as características desta aplicação excepcional!

## 📝 Licença
Este projeto está sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com ❤️ por Rafael.
