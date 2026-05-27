
# 🚀 Projeto de Automação de Testes com Cypress

Projeto de automação de testes E2E utilizando **Cypress** e **JavaScript**, com foco em validação de fluxos críticos da aplicação web.

---

# 📋 Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome (geração de relatórios)

---

# 📁 Estrutura do Projeto

```bash
BANCO-WEB-TESTS
│
├── cypress
│   ├── e2e
│   │   ├── login.cy.js
│   │   └── transferencia.cy.js
│   │
│   ├── fixtures
│   │   └── credenciais.json
│   │
│   ├── reports
│   │   ├── assets
│   │   ├── screenshots
│   │   ├── videos
│   │   └── index.html
│   │
│   ├── screenshots
│   ├── support
│   │   ├── commands
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   └── videos
│
├── node_modules
├── .gitignore
├── cypress.config.js
├── package-lock.json
└── package.json
```

---

# ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js (versão 16 ou superior)
- npm ou yarn

Além disso, as aplicações abaixo devem estar em execução:

- banco-api
- banco-web

Verifique as versões instaladas:

```bash
node -v
npm -v
```

---

# 📦 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd BANCO-WEB-TESTS
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando os Testes

## Abrir interface do Cypress

```bash
npx cypress open
```

## Executar testes em modo headless

```bash
npx cypress run
```

---

# 🧪 Casos de Teste

Atualmente o projeto possui automações para:

- ✅ Login
- ✅ Transferência bancária

Arquivos:

```bash
cypress/e2e/login.cy.js
cypress/e2e/transferencia.cy.js
```

---

# 🔐 Massa de Dados

As credenciais utilizadas nos testes ficam em:

```bash
cypress/fixtures/credenciais.json
```

Exemplo:

```json
{
  "usuario": "usuario_teste",
  "senha": "123456"
}
```

---

# 📊 Evidências e Relatórios

Após a execução dos testes, os artefatos são gerados automaticamente.

Os relatórios HTML são gerados utilizando o **Mochawesome**.

## Screenshots

```bash
cypress/screenshots
```

## Vídeos

```bash
cypress/videos
```

## Relatórios HTML

```bash
cypress/reports/index.html
```

---

# 🛠️ Comandos Customizados

Os comandos reutilizáveis do Cypress ficam centralizados em:

```bash
cypress/support/commands.js
```

Exemplo:

```javascript
Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#user').type(usuario)
  cy.get('#password').type(senha)
  cy.get('#login').click()
})
```

---

# 📌 Boas Práticas Utilizadas

- Separação de massa de dados com fixtures
- Reutilização de comandos customizados
- Geração automática de evidências
- Relatórios automatizados com Mochawesome
- Estrutura organizada por funcionalidade
- Testes independentes

---

# 👨‍💻 Autor

Projeto da Mentoria 2.0 do Julio de Lima desenvolvido para estudos e automação de testes E2E com Cypress.
