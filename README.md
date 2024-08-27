# Exemplo de documentação de API



## POST (ALUNO)
Para criar um aluno: usar (JSON)

      http://localhost:3000/aluno

      O corpo da requisição deve ser a seguinte:

   {
	"nome":"albo",
	"email":"albo1@gmail.com",
	"senha":"albo123"
  }
  

  ## POST (PROVA)
Para criar um prova: usar (JSON)

      http://localhost:3000/prova

      O corpo da requisição deve ser a seguinte:

 {
	"anoProva":"2022",
	"materia":"matematica",
	"link":"prova.com",
	"alunoId":1
}  




  ## GET (aluno)
Para realizar o GET de aluno: (pegar todos alunos)

        http://localhost:3000/aluno

  ## GET (aluno)
Para realizar o GET de aluno: (pegar aluno pelo id, no caso muda o numero 1 pelo id do aluno que você desejar "mostra o aluno e suas provas, vinculada a esse aluno")

        http://localhost:3000/aluno/1

  ## GET (aluno)
Para realizar o GET de alunos: (pegar aluno pelo nome, no caso muda o nome pelo nome do aluno que você desejar)

        http://localhost:3000/aluno/nome/albo


        
        
  ## GET (prova)
  Para realizar o GET de prova: (pegar todas provas)

        http://localhost:3000/prova




  ## GET (prova)
  Para realizar o GET de prova: (pegar provas pela matéria, e alunos vinculados a mesma)

        http://localhost:3000/prova/materia/matematica




  

  ## PUT (aluno)
Para realizar o PUT de aluno (O número "1" você troca de acordo com o id do aluno que deseja editar) (JSON)

        http://localhost:3000/aluno/1

O corpo da requisição deve ser a seguinte: "troquei o nome do aluno com o id 1, de albo para gilso"

    {
	  "nome":"gilso",
	  "email":"albo1@gmail.com",
  	"senha":"albo123"
    }




  ## PUT (prova)
Para realizar o PUT de prova (O número "1" você troca de acordo com o id da prova que deseja editar) (JSON)

       http://localhost:3000/prova/1

O corpo da requisição deve ser a seguinte: "troquei a materia da prova referente ao id 1, de matematica para geografia"

  {
	"anoProva":"2022",
	"materia":"geografia",
	"link":"prova.com",
	"alunoId":1
  } 


  ## DELETE (aluno)
Para realizar o delete (troco o numero 1 pelo id do aluno que desejo deletar)
 
  http://localhost:3000/aluno/1


  ## DELETE (prova)
Para realizar o delete (troco o numero 1 pelo id da prova que desejo deletar)
 
  http://localhost:3000/prova/1














        
