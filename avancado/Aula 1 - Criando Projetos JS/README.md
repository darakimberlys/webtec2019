# Aula 1 - Criando Projetos JS com NPM

> Nesta aula iremos aprender a iniciar um projeto JS utilizando o NPM. 

_______________

> Requisitos para a aula:

- Node e NPM
- VSCode (ou outro editor de preferência)
- Terminal ou PowerShell
- Navegador

_______________

- Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Ele permite a criação de aplicações Back-end utilizando JS e TS, para instalar o node em seu sistema, acesse o site oficial e faça o download da versão LTS (a instalação é simples NEXT NEXT FINISH). Site oficial > [Node](http://nodejs.org)


```
node --version
```
ou

```
npm -V
```

- NPM é um gerenciador de pacotes do Node, como o nome sugere Node Package Manager, e ele tem como objetivo facilitar a nossa vida quando se trata de instalação de pacotes em um projeto. Com ele podemos adicionar ao nosso projeto alguns frameworks ou plugins, como exemplo o Bootstrap, Express, TypeScript, Nodemon, ESLint, TSLint, entre muitos outros. Obs: o NPM vem junto com o node, e para verificar se foi instalado rode o comando abaixo no PowerShell o Terminal:

```
npm --version
```
ou

```
npm -V
```
_______________
> Comandos utilizados na Aula:

```
npm init
```

- Após esse comando, será perguntado algumas informações sobre o Projeto, como nome, versão, pasta raiz, repositório git, licença, etc... Pode-se prosseguir dando enter ou inserindo as informações de acordo com o solicitado, fica ao seu critério, pois posteriormente iremos mexer no arquivo gerado por este comando.