import mongoose from "mongoose";
const tiposSchema = new mongoose.Schema( {
    id: {type: String},
    nome: {type: String, required: true},
    /*Inserimos que o titulo é requerido,
    então isso quer dizer que não podemos jamais
    por exemplo, efetuar um post sem o titulo do livro.
     */
    descricao: {type: String}},
    {
        versionKey: false
    }
    
)
const tipos= mongoose.model('tipos', tiposSchema)
export default tipos;