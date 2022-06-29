import mongoose from "mongoose";
const montadorasSchema = new mongoose.Schema( {
    id: {type: String},
    nome: {type: String, required: true},
    /*Inserimos que o titulo é requerido,
    então isso quer dizer que não podemos jamais
    por exemplo, efetuar um post sem o titulo do livro.
     */
    origem: {type: String}, 
    descricao: {type: String}},
    {
        versionKey: false
    }
    
)
const montadoras= mongoose.model('montadoras', montadorasSchema)
export default montadoras;