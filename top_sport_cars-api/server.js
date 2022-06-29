import app from './src/app.js'; //importação das nossas rotas.
/*
Vale lembrar que para que as rotas possam ser importadas
É necessário que no package.json esteja especificado 
["type":"module"] -> informa que se permite import de rotas.
*/
const port = process.env.PORT || 3000; /*
Usamos o process.env.PORT para casos em que
 damos deploy da nossa aplicação no Heroku, por exemplo, 
 então nossa porta não será mais 3000, sendo essa apenas nossa porta local
 */
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})