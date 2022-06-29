import express from "express";
import db from "../config/dbConnect.js";
import cars from "./models/Car.js"
import routes from "./routes/index.js"
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')});
  const app = express();
app.use(express.json());/*informamos o formato que iremos
receber ações de post, por exemplo, devem estar no formato
JSON para que seja aceito a inserção*/
routes(app);
//Trabalhando com PUT(inserir) livro e GET(encontrar) livro.

function buscaCar(id) {
  return cars.findIndex(livro => livro.id == id)
}/*Esse método retorna o carro se ele for igual
ao param.; Usamos findIndex que é um meio pelo qual 
buscamos pelo index de um array.
 */
app.put('/cars/:id', (req, res) => {
  let index = buscaCar(req.params.id);//req é o valor da requisição
  cars[index].titulo = req.body.titulo;//meio que altera o titulo.
  res.json(cars);//meio que retorna o valor modificado em JSON.
})
app.get('/cars/:id', (req, res) => {
  let index = buscaCar(req.params.id);
  res.json(cars[index]);
})/* Esse trecho de código é o que nos permite
pura e simplesmente efetuar uma busca por id.
 */

app.delete('/cars/:id', (req, res) => {
  let {id} = req.params; // É o n do id do carro pesquisado!
  let index = buscaCar(id);
  cars.splice(index, 1); //.splice é um metódo de array que usamos para apagar registros
  res.send(`Car ${id} removido com sucesso`);
})

export default app