Criando um crud restful
---------------------
>
Foi utilizado o node.js e postgres.
>
npm install
>
# Declarar a string de conexao na variavel de ambiente
(LINUX) export DATABASE_URL="stringConexaoAqui" 
>
(WINDOWS)set DATABASE_URL="stringConexaoAqui"
>
## Metodos HTTP
>
### http.get (http://localhost:3001/)
> retorna uma lista de registros do banco de dados.
>
### http.post (http://localhost:3001/)
> cria um registro do banco de dados
>
### http.put (http://localhost:3001/)
> altera um registro do banco de dados
>
### http.delete (http://localhost:3001/)
> deleta um registro do banco de dados

