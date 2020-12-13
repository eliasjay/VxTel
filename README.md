# VxTel
Back-End test to Vórtx

## Para a execução do Back-end:

1. Entre na pasta `backend/`
2. Execute o `yarn` ou `npm` para instalar as dependências.
3. Caso queira rodas a API em modo de desenvolvimento utilize o comando `yarn dev` ou `npm dev`
4. Para rodas os testes, execute o comando `yarn test` ou `npm test`
5. Você também poderá abrir o arquivo `index.html` que está dentro da pasta `backend/coverage/lcov-report/` para visualizar o coverage report dos testes.
6. Para rodar a API em modo de produção, será necessário executar o comando `yarn build` ou `npm build` para criar a versão de distribuição e `yarn start` ou `npm start` para executá-la.
7. Pronto, a API está rodando.

## Para a execução do Front-end (necessário ter executado todos os passos para a execução do back-end):

1. Entre na pasta `front/`
2. Execute o `yarn` ou `npm` para instalar as dependências.
3. Para rodar o front-end, execute o comando `yarn serve` ou `npm serve`.
4. Pronto, com o back-end ainda rodando, o front-end poderá se comunicar com o server para consumir os seus serviços.