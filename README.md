Esse é um exercício para fixação do conteúdo sobre `Context API`.

## Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Será a partir do código existente branch master que você construirá a solução do exercício.

## Desenvolvendo o Exercício
Primeiramente, crie uma branch para desenvolver a sua resolução com o comando `git checkout -b nome-da-branch`

### Exercício prop drilling

Refatore a aplicação existente na branch master utilizando Context API para evitar prop drilling.

A aplicação existente consiste basicamente em duas páginas, uma de Login e uma Home, onde um componente chamado Header renderiza o username passado no login dentro de uma tag p. A aplicação foi desenvolvida com prop drilling.

Seu objetivo é refatorar o código para que a aplicação funcione utilizando a Context API para gerenciar o estado do componente e manter o funcionamento normal.<br />

### Resolução

Você pode conferir uma possível resolução para o exercício acessando a branch solution, utilizando o comando `git checkout solution`.
