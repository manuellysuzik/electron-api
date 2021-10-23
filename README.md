# ELECTRON CHAT API - EM PRODUÇÃO

## Desenvolvido com :
 - Koa
 - MongoDB
 - ES6
 - Babel

## Para rodar o projeto a primeira vez:
  `yarn install` ou `npm install` e após instaladas as dependencias necessárias : `yarn dev` ou `npm run dev`
  - no arquivo src/server.js existe uma função loadSeed() que carrega um usuário, para isso acontecer, basta descomentar a linha
  no banco de dados mongo.
    - Essa funcionalidade ainda está em desenvolvimento, logo mais esse processo será automatizado para rodar apenas uma vez

## Rotas em produção
  - /signup : cria um usuário no banco de dados