# qa.automationexercise-web.webdriverio

Este projeto utiliza [WebdriverIO](https://webdriver.io/) para automação de testes na aplicação [Automation Exercise](https://automationexercise.com/).

## Pré-requisitos

Antes de instalar o projeto, certifique-se de ter os seguintes requisitos:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node)
- **Git** (para clonar o repositório)
- **Java** (instalado e configurado no PATH, necessário para geração dos relatórios Allure)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/julissy/qa.automationexercise-web.webdriverio.git
   cd qa.automationexercise-web.webdriverio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## Configuração

Os parâmetros principais do projeto, como URL da aplicação, credenciais e informações de execução, podem ser configurados diretamente no arquivo `wdio.conf.js`.

### Configuração do Allure Reports

Este projeto utiliza o [Allure Reporter](https://webdriver.io/docs/allure-reporter/) para geração de relatórios detalhados dos testes.

> **Importante:** Para gerar e visualizar o relatório Allure é necessário ter o Java instalado e configurado em sua máquina. O Allure CLI depende do Java para funcionar corretamente.

Para utilizar o Allure Reports:

1. Certifique-se que o pacote `@wdio/allure-reporter` está instalado (ele já faz parte das dependências do projeto).
2. Após executar os testes, o relatório será gerado na pasta `./allure-results`.
3. Para visualizar o relatório, instale o CLI do Allure (caso ainda não tenha):

   ```bash
   npm install -g allure-commandline --save-dev
   ```

4. Gere e visualize o relatório com os comandos:

   ```bash
   npm run allure:report
   ```

   Isso abrirá o relatório em seu navegador padrão.

## Estrutura dos diretórios

Abaixo está um desenho exemplificando a estrutura básica do projeto:

```
qa.automationexercise-web.webdriverio/
│
├── tests/                # Testes automatizados
│   ├── cadastro.spec.ts
│   └── login.spec.ts
│
├── pageObjects/          # Page Objects para organização dos elementos e ações das páginas
│   ├── CadastroPage.ts
│   └── LoginPage.ts
│
├── elements/             # Elementos reutilizáveis ou mapeamentos de seletores
│   ├── cadastro.elements.ts
│   └── login.elements.ts
│
├── wdio.conf.ts          # Arquivo de configuração do WebdriverIO
├── package.json          # Gerenciador de dependências e scripts do projeto
├── allure-results/       # Resultados dos testes para geração do relatório Allure
└── README.md             # Documentação do projeto
```

## Como executar os testes

Para rodar todos os testes automatizados, execute:

```bash
npm run wdio
```

Ou para rodar um conjunto específico de testes:

```bash
npx wdio run wdio.conf.ts --spec ./caminho/do/arquivo.spec.ts
```

## Relatórios

- Relatórios Allure são gerados na pasta `./allure-results` após a execução dos testes.
- Siga as instruções acima para gerar e visualizar o relatório (lembre-se: o Java é obrigatório para o funcionamento do Allure CLI).


---

> Projeto mantido por [julissy](https://github.com/julissy)
