import tipos from "../models/Tipo.js";

class TiposController {

    static listarTipos = (req, res) => { 
        tipos.find((err, tipos) => { 
            res.status(200).json(tipos) })}

            static cadastrarTipo = (req, res) => {
                let tipo = new tipos(req.body);
                tipo.save((err) => {
                    if(err) { res.status(500).send({message: `${err.message} - falha ao cadastrar tipo.`})}
                    else {
                        res.status(201).send(tipo.toJSON()) 
                    }
                }
                )
            }

            static atualizarTipo = (req, res) => {
                const id = req.params.id;
                tipos.findByIdAndUpdate(id, {$set: req.body},
                    (err) => {
                    if(!err) { res.status(200).send({message: 'Tipo atualizado com sucesso'})}
                    else {
                        res.status(500).send({message: err.message})
                    }
                }
                )
            }
        
            static excluirTipo = (req, res) => {
                const id =req.params.id;
                tipos.findByIdAndDelete(id, (err) => { 
                    if(!err) {res.status(200).send({message: 'Tipo removido com sucesso'})}
                    else { res.status(500).send({message: err.message})
                }
                }
                )
             }}
   


export default TiposController;