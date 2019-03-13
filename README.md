# Projeto Base da Arquitetura SPA Santander

Esse projeto foi criado com o Angular [Angular CLI](https://angular.io/cli)
e foi customizado pela Arquitetura SPA

Para utilizar os comandos do Angular CLI, execute o seguinte comando:
```sh
npm i -g @angular/cli@7.0.4
```

As configurações de ambiente, devem ser feitas na pasta `src/assets/ENV/url.config.json`
Visto que é a pasta que será substituida de ambiete pra ambiente

Além dos comandos do Angular CLI, estão disponíveis os seguintes comandos:

## Desenvolvimento
`npm start`: Abre o navegador e inicia a aplicação na URL: `http://localhost:4200/`

`npm run hmr`: Abre o navegador e inicia a aplicação na URL: `http://localhost:4200/` (A diferença do start, é que esse a cada vez que você salvar um arquivo, o navegador não vai dar refresh, e você se manterá na mesma rota que estava desenvolvendo \o/)

## Testes
`npm run test:console`: Executa os testes unitários de acordo com a configuração do karma.conf.js. Os arquivos de Cobertura de Testes Unitários serão gerados na pasta: `coverage`
É o comando que será executado no DevOps

`npm test`: Executa os testes unitários da mesma maneira que acima, porém pra Debug vai abrir o Chrome e ficar com um watch observando o código caso seja alterado

`npm run e2e`: Executa os testes funcionais da aplicação utilizando o Protractor

## Build
`npm run build`: Gera o pacote de produção na pasta: dist

## Documentação
`npm run doc`: Gera a documentação da aplicação na pasta: documentation

## Análise Estática
`npm run lint`: Executa o lint que será também executado no Sonar
