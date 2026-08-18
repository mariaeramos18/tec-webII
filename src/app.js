import express from "express"
const app = express()

// Express deve interpretar o corpo(bodo) como JSON
app.use(express.json)

//Dados Mock
const lista = [
  {id:2,nome:'Bruno',curso:'ADS'},
  {id:3,nome:'Maria',curso:'ADS'},
  {id:4,nome:'Daniel',curso:'ADS'},
]

//Função auxilixar
function buscaralunoPorId(id){
  return alunos.filter(aluno => aluno.id == id)
}


function buscarIndexAluno(id){
  return alunos.findIndex(aluno => aluno.id == id)
}

//criando a rota raiz
app.get('/', (req, res) => {
  res.send('Minha API REST com Express!')
})

//Rota lista alunos GET
app.get('/alunos',(req,res)=>{
  res.status(200).send(alunos);
})

//Rota lista alunos POST
app.get('/alunos', (req, res) => {
  alunos.push(req.body)
  res.status(201).send('Aluno cadastrado com sucesso!')
})

//Delete
app.delete('/alunos/:id', (req, res) => {
  let index= buscarIndexAluno(req.params.id)
  //console.log(index)
  alunos.splice(index,1)
  res.send('Aluno com id ${req.params.id} removido com sucesso!')
})

//Buscar aluno por id
app.get('/alunos/:id', (req, res) => {
  let index= buscarIndexAluno(req.params.id)
  res.json.buscaralunoPorId(req.params.id )
})

//Atualizar aluno
app.put('/alunos/:id', (req, res) => {
  let index= buscarIndexAluno(req.params.id)
  alunos[index].nome = req.body.nome
  alunos[index].curso = req.body.curso
  res.send(alunos)
})

export default app