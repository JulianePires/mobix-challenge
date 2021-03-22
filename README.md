<div align="center" id="top"> 
  &#xa0;
</div>

<h1 align="center">Mobix Software Studio - Desafio Front End</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JulianePires/mobix-challenge?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/JulianePires/mobix-challenge?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JulianePires/mobix-challenge?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/JulianePires/mobix-challenge?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/JulianePires/mobix-challenge?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/JulianePires/mobix-challenge?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/JulianePires/mobix-challenge?color=56BEB8" />
</p>

## :rocket: Technologies ##

- [CSS3](https://www.w3schools.com/css/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/)
- [Material-Ui](https://material-ui.com/pt/)
- [Cypress](https://www.cypress.io/)

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/JulianePires/mobix-challenge

# Access
$ cd mobix-challenge

# Install dependencies
$ yarn

# Run the project
$ yarn start

# Run tests
$ yarn cypress

# The server will initialize in the <http://localhost:3000>
```


## Configurações do projeto

- Criado com create-react-app
  yarn create react-app mobix-challenge --template typescript

- Instalado o Cypress para testes
  yarn add cypress

- Instalado o material-ui como framework css
  yarn add @material-ui/core

## Diário de bordo

A minha satisfação na realização desse projeto foi o desafio em si. Por ser completamente fascinada por desafios, mergulhei de cabeça nas funcionalidades e comecei a construção da aplicação pela estratégia de componentização, dividi então o meu tempo entre as tarefas e comecei a desenvolver a partir do create-react-app somente para agilizar no processo de configuração de renderização e funcionalidade do React. 

Optei por utilizar um contexto para manipular variáveis e funções que seriam utilizadas por diversos componentes e dividi a tabela em módulos e submódulos, renderizando cada um deles a partir de suas características individuais relacionadas com as colunas em que se encontravam.

Em cada submódulo, utilizei um useEffect para que o estado do checkbox fosse alterado quando a permissão do elemento pai também fosse alterado, criando assim a ligação do checkbox do módulo com seus respectivos filhos.

O useState foi amplamente utilizado na alteração de estado de variáveis controladas, importante, inclusive, no desenvolvimento do context.

Criei um tema, utilizando uma funcionalidade do Material-ui, para alterar propriedades de estilo da tabela e utilizei o !important para dar um override nas propriedades do botão.

Minha estratégia de controle de componentes mudou umas 3 vezes durante o desenvolvimento na busca da melhor performance, afinal, preferimos ser uma metamorfose ambulante do que ter aplicações lentas e com erros.

Por fim, o mais interessante de tudo, foi o desenvolvimento de testes utilizando o cypress, recurso que eu nunca havia experimentado mas que acabei achando super interessante.

That's All Folks!