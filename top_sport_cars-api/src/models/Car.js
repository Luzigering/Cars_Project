import mongoose from "mongoose";
const carsSchema = new mongoose.Schema( {
    id: {type: String},
    imagem: {type: Array, required: true},
    nome: {type: String, required: true},
    /*Inserimos que o titulo é requerido,
    então isso quer dizer que não podemos jamais
    por exemplo, efetuar um post sem o titulo do livro.
     */
    montadora: {type: mongoose.Schema.Types.ObjectId, ref: 'montadora', required: true},
    descricao: {type: String, required: true},
    tipo: {type: mongoose.Schema.Types.ObjectId, ref: 'tipo', required: true},
})
const cars= mongoose.model('cars', carsSchema)
export default cars;