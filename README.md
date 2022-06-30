# APP Cadastro de funcionário

`Este App tem a finalidade de inserir, excluir, editar e listar Funcionários`
### Tempo Gasto
- Foi gasto o tempo total de 9hrs.
1. 28/06/2022 - 4hrs -> Analise da demanda, elaboração de interface e inicio de desenvolvimento, criação de conta AWS e configuração de ambiente DynamoDB, Lambda e APIGetway na AWS.
2. 29/06/2022 - 3hrs -> inicio de configuração do Front-end e Back-end do App, desenvolvimento da integração no Back-end, desenvolvimento de funcionalidades do Front-end.
3. 30/06/2022 - 2hrs -> validações finais e correções, Testes Técnicos, Desenvolvimento de documentação.

### Arquitetura AWS

Feito com Lambdas, DynamoDB e APIGetway da estrutura AWS fizemos uma integração que comunica com DynamoDB através de lambdas desenvolvidas para criação da estrutura. Utilizamos a APIGetway para "conversar" com nossas Lambdas(Functions), para fechar os ciclos de PUT, POST, GET, DELETE.
As functions se encontram no diretório: \awsless

![Arquitetura AWS](Print_1.png?raw=true)

### Back-end

Construído em uma estrutura Node.JS, utilizamos Express como base para inicio e somamos ao código o Axios, para criação da integração com RESTAPI e utilizamos o JQuery como recurso em uma das funcionalidades do Front-end.

`IMPORTANTE:` Utilizamos um .env para mascarar a URL de conexão da API já que a mesma está desprotegida e será descontinuada após esta validação, por tanto, irei encaminhar exclusivamente a URL para os responsáveis pela correção.

No Front utilizamos HTML5 e Bootstrap para moldar nossa interface.

### Funcionalidades

- Na imagem abaixo mostra o Home do sistema, uma tela onde podemos cadastrar o nosso Funcionário com nome, Cargo e Idade! Clicando em Salvar Funcionário somos direcionados a próxima tela (Lista de Funcionários).
- A Lupa indicado na imagem abaixo também direciona para Lista de funcionários diretamente.

![Home](Print_2.png?raw=true)

- Na lista de funcionários podemos observar quais funcionários temos e quais são seus atributos cadastrados como Cargo e idade.
- o ID mostrado foi gerado a partir de um código aleatório na Lambda para que não tenhamos problemas na criação dentro do DynamoDB.
- Caso queira voltar para cadastro, basta acessar o Home "Casinha".
- Temos, para cada funcionário uma opção de Deletar e Editar.

![Lista Funcionário](Print_3.png?raw=true)

- Caso queira deletar um funcionário a aplicação ira perguntar se realmente deseja deletar.

![Deletar](Print_4.png?raw=true)

- Caso tudo ocorra bem o sistema irá mostrar uma mensagem de sucesso!

![Sucesso](Print_5.png?raw=true)

- Já na edição de usuários, o sistema permite editar o funcionário selecionado, podendo alterar seu Nome, Idade ou Cargo!
- Caso deseje cancelar a alteração, podemos clicar em Home ou Lista, "casinha" ou "lupa" respectivamente, para sair da tela de Edição do funcionário.
- Caso altere o funcionário clicando em "Salvar Alterações" somos direcionados a Lista de funcionários para validarmos nossas alterações.

![Sucesso](Print_6.png?raw=true)

### instalação

- Com Node.Js e npm devidamente instalados, basta entrar na pasta /cadastro-funcionario (CMD: cd cadastro-funcionario) digitar "npm install".
- Renomeie o .env.exemplo para .env e certifique que a url da API esta na variável API_URL
- Para iniciar a aplicação basta digitar "npm start".
- Em seu navegador digite http://localhost:3000/.

### Considerações finais

- Um sistema simples, não sei atendeu as expectativas, com mais tempo poderia inserir senha na API, criar um Search e outras coisas mais. Não tinha familiaridade com a AWS, para isso, é a primeira vez que estou fazendo, e curti muito. Qualquer dúvida me coloco a disposição.
