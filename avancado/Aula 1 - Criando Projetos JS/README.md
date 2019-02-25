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

```
npm install

npm install bootstrap
```

- NPM Install - baixa as dependencias do projeto (util para atualizar dependencias e pacotes, além de instalar do zero as dependencias ao clonar do git ou pegar o projeto de outra pessoa).
- NPM Install <Dependencia/Pacote> - serve para baixar um novo pacote ou dependencia, passando o nome do que deseja instalar no projeto (sem os sinais de <>).
_________________________
> Sobre a Estrutura de Pastas e Arquivos:

- Em projetos mais complexos ou que tendem a ficar robustos, nós tomamos uma abordagem diferente para a estrutura e organização interna. Uma estrutura bem planejada melhora a comunicação do projeto com outros projetos ou módulos, melhora a comunicação interna entre componentes, e faz com que as coisas fiquem mais objetivas, facilitando a manutenção e entendimento do projeto.

- raiz -> aqui ficam os arquivos e pastas principais e de configuração do projeto
    - /database -> esta pasta contém arquivos json para simular um banco de dados.
    - /node_modules -> dependencias e arquivos do node para que tudo funcione corretamente.
    - /src -> esta pasta é a pasta 'source', onde fica todo o código fonte da aplicação.
        - /app -> aqui nós colocamos os arquivos principais da nossa aplicação/site.
            - Aqui temos diversas pastas e arquivos, para css, js, sass/scss, imagens, nossa index, etc...
        - /domain -> esta pasta recebe os scripts de conexão com API, aqui vai parte da regra de negócio (dependendo da abordagem de negócio).
            - Neste diretório podemos separar scripts de API e de Services, além de classes e outros elementos.
_________________________
Material de Apoio:

- [Node Package Manager - Site Oficial](https://www.npmjs.com/)
  - Neste site você pode pesquisar pacotes e dependências para instalar no seu projeto, ele traz algumas informações além do comando de instalação, e ainda informa quais as dependências do pacote em questao.

- [O que é o Node.js - NodeBR](http://nodebr.com/o-que-e-node-js/)
    - Artigo sobre o que é o Node no site oficial do Node no Brasil o NodeBR.

- [O que é o NPM - NodeBR](http://nodebr.com/o-que-e-a-npm-do-nodejs/)
    - Artigo sobre o que é o NPM no site oficial do Node no Brasil o NodeBR.

- [O que é Arquitetura de Software?](https://msdn.microsoft.com/pt-br/hh144976.aspx)
    - Artigo interessante sobre arquitetura de software e sobre o que um Arquiteto de Software faz.

- [JavaScript - Mozilla Developer Network](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
    - Este é um dos sites mais importantes, ele traz as últimas especificações do JS, além de artigos, tutoriais, e material para consulta sobre a linguagem, é praticamente a Documentação Oficial.