import montadoras from "../models/Montadora.js";

class MontadorasController {

    static listarMontadoras = (req, res) => { 
        montadoras.find((err, montadoras) => { 
            res.status(200).json(montadoras) })}

            static cadastrarMontadora = (req, res) => {
                let montadora = new montadoras(req.body);
                montadora.save((err) => {
                    if(err) { res.status(500).send({message: `${err.message} - falha ao cadastrar montadora.`})}
                    else {
                        res.status(201).send(montadora.toJSON()) 
                    }
                }
                )
            }

            static atualizarMontadora = (req, res) => {
                const id = req.params.id;
                montadoras.findByIdAndUpdate(id, {$set: req.body},
                    (err) => {
                    if(!err) { res.status(200).send({message: 'Montadora atualizado com sucesso'})}
                    else {
                        res.status(500).send({message: err.message})
                    }
                }
                )
            }
        
            static excluirMontadora = (req, res) => {
                const id =req.params.id;
                montadoras.findByIdAndDelete(id, (err) => { 
                    if(!err) {res.status(200).send({message: 'Montadora removido com sucesso'})}
                    else { res.status(500).send({message: err.message})
                }
                }
                )
             }}
   


export default MontadorasController;