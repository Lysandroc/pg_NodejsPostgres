Criando um crud restful
---------------------
>
A tecnologia é o node.js e postgres(modulo pg para manipular o db).
>
npm install
>
# Declarar a string de conexao na variavel de ambiente
export DATABASE_URL="stringConexaoAqui" ou set DATABASE_URL="stringConexaoAqui"
>
## Metodos http
>
### http.get
> retorna uma lista de registros do banco de dados.
>
### http.post
> cria um registro do banco de dados
>
### http.put
> altera um registro do banco de dados
>
### http.delete
> deleta um registro do banco de dados
>
