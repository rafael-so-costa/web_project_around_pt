🗺️ Around The U.S.

Sprint 8 — Métodos em JavaScript e Manipulação do DOM
Projeto desenvolvido no Bootcamp TripleTen (Web Developer).

📖 Descrição do Projeto

O Around The U.S. é uma página interativa que apresenta perfis de usuários e cartões de fotos de lugares marcantes.
Neste sprint, o foco foi transformar uma página estática em um aplicativo web dinâmico, aplicando conceitos fundamentais de JavaScript moderno, manipulação do DOM e métodos de arrays.

A aplicação permite editar o perfil, criar novos cartões, curtir, excluir e visualizar imagens em tamanho ampliado através de pop-ups modais totalmente funcionais.

🎯 Objetivos de Aprendizagem

Compreender e aplicar métodos de arrays (forEach, map, filter, etc.)

Manipular o DOM para criar interatividade em páginas HTML

Utilizar funções reutilizáveis e boas práticas de escopo e nomenclatura

Aprender a abrir e fechar modais via JavaScript

Trabalhar com templates HTML e clonagem de elementos (template, cloneNode())

Refatorar código para separar dados da marcação HTML

Desenvolver um projeto organizado, sem erros no console e conforme checklist da TripleTen

⚙️ Funcionalidades Implementadas

✅ Edição de perfil

O modal “Editar perfil” abre ao clicar no botão ✏️

Os campos do formulário são preenchidos automaticamente com os valores atuais

Ao clicar em “Salvar”, o nome e a descrição são atualizados no perfil

✅ Criação de novos cartões

O modal “Novo local” abre ao clicar no botão ➕

O usuário pode inserir o nome e o link de uma imagem

O novo cartão é criado dinamicamente e aparece no topo da lista

✅ Curtidas e exclusões

Cada cartão possui um botão de “Curtir” (❤️) que alterna a classe card__like-button_is-active

O botão 🗑️ remove o cartão do DOM instantaneamente

✅ Visualização de imagem ampliada

Ao clicar em qualquer imagem, abre-se o modal de visualização em tamanho maior com legenda

O modal pode ser fechado pelo botão de fechar, pela tecla Esc ou clicando fora do conteúdo

✅ Melhorias de UX

Fechamento universal de modais via overlay e tecla Esc

Parâmetros padrão para cartões sem dados completos

🧩 Estrutura do Projeto
web_project_around_pt/
│
├── blocks/              → Estilos BEM organizados por blocos
├── images/              → Imagens e placeholder padrão
├── pages/
│   └── index.css        → Estilos globais da página
├── scripts/
│   └── index.js         → Código JS principal do projeto
├── index.html           → Estrutura HTML principal
└── README.md            → Este documento

🧠 Conceitos Aplicados

Manipulação do DOM: querySelector, classList, textContent, setAttribute

Eventos: click, submit, keydown, mousedown

Estruturas de dados: arrays de objetos

Funções puras e reutilizáveis

Template HTML + cloneNode()

Boas práticas:

Nomes em camelCase

Cada função realiza uma única tarefa

Nenhum uso de innerHTML com dados do usuário (segurança)

Declarações const e let corretas conforme mutabilidade

🧰 Tecnologias Utilizadas

HTML5 — Estrutura semântica e acessível

CSS3 (BEM Methodology) — Organização modular e reutilizável

JavaScript (ES6+) — Interatividade e manipulação de dados

Git e GitHub — Controle de versão e hospedagem do projeto

🚀 Próximos Passos

🔹 Implementar salvamento persistente dos dados usando uma API ou Local Storage
🔹 Adicionar validação de formulários em tempo real
🔹 Aplicar animações CSS para abertura e fechamento de modais
🔹 Fazer deploy da aplicação (GitHub Pages ou Netlify)

👨‍💻 Autor

Rafael Soares Costa
Estudante do Bootcamp TripleTen — Web Developer
📧 rafaelcostacomvc@gmail.com

🧾 Licença

Este projeto é apenas para fins educacionais — TripleTen Bootcamp (Sprint 8).
